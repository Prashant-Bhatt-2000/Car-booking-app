// - Add cars to the dealership
// - Add deals to the dealership
// - View all vehicles sold by the dealership with owner info

//==================================================================//

import mongoConnection from "../../database/mongoConnection.mjs";


const addCars = async (carData, dealerId) => {
    try {
        const client = await mongoConnection();
    
        const carCollection = client.collection('cars');
        if (!carCollection) {
            throw new Error('Failed to access the car collection');
        }

        const { dealer, cartype, name, model, image, carinfo, features } = carData;

        const newCar = { 
            dealer, 
            cartype,
            name, 
            model, 
            carinfo: { 
                manufacturer: carinfo.manufacturer, 
                year: carinfo.year, 
                color: carinfo.color, 
                mileage: carinfo.mileage, 
                condition: carinfo.condition, 
                price: carinfo.price, 
                description: carinfo.description
            },
            features: {
                exterior: features.exterior,
                interior: features.interior,
                safety: features.safety,
                entertainment: features.entertainment
            }
        };

        const dealerCollection = client.collection('dealer');


        const result = await carCollection.insertOne(newCar);

        await dealerCollection.updateOne(
            { _id: ObjectId(dealerId) },
            { $push: { cars: result.insertedId } }
        );
        console.log('Car added:', result);
        return result;
    } catch (error) {
        const customError = new Error('Failed to add car');
        customError.statusCode = 500;
        throw customError;
    }
};

const addDeals = async(dealData)=> { 
    try {
        const client = await mongoConnection();
    
        const dealCollection = client.collection('deals');
        if (!dealCollection) {
            throw new Error('Failed to access the deal collection');
        }

        const { car_id, deal_info } = dealData

        const newDeal = { 
            car_id, 
            deal_info: { 
                buyer: deal_info.buyer, 
                dealer: deal_info.dealer
          }
        }
        const result = await dealCollection.insertOne(newDeal)
        return result.insertedId

    } catch (error) {
        const customError = new Error('Failed to add deal');
        customError.statusCode = 500;
        throw customError;
    }
}


import { ObjectId } from "bson";

const getSoldCars = async (dealerId) => {
    try {
        const client = await mongoConnection();
        const soldVehiclesCollection = client.collection('Sold_Vehicles');

        if (!soldVehiclesCollection) {
            throw new Error('Failed to access the Sold_Vehicles collection');
        }

        const soldCars = await soldVehiclesCollection.find({ 'vehicle_info.sold_by': ObjectId(dealerId) }).toArray();

        const buyersCollection = client.collection('user');

        const buyerInfo = await buyersCollection.findOne(
            { '_id': { $in: soldCars.map(car => car.vehicle_info.sold_to) } },
            { projection: { password: 0 } }
        );

        return { soldCars, buyerInfo }; 
    } catch (error) {
        throw new Error('Failed to get sold vehicles');
    }
};


export { addCars, addDeals, getSoldCars }