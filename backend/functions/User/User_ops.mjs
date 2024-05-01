// View dealerships with a certain car
// View all vehicles owned by the user with dealer info
// View all deals on a certain car

// =========================================================== //

import  { ObjectId } from 'mongodb'
import mongoConnection from "../../database/mongoConnection.mjs";


const availableCarDeals = async (carModel) => { 
    try {
        const db = await mongoConnection();
        const carsCollection = db.collection('cars'); 
        
        if (!carsCollection) {
            throw new Error('Failed to access the cars collection');
        }

        const availableDeals = await carsCollection.find({ model: carModel }).toArray();

        return availableDeals; 
    } catch (error) {
        console.error('Error fetching available car deals:', error);
        throw new Error('Failed to fetch available car deals');
    }
}


const ownedCars = async (buyerId) => { 
    try {
        const db = await mongoConnection();
        const dealsCollection = db.collection('deals'); 

        if (!dealsCollection) { 
            throw new Error('Failed to access the deals collection');
        }

        const ownedDeals = await dealsCollection.find({ 'deal_info.buyer': ObjectId(buyerId) }).toArray();

        const carIds = ownedDeals.map(deal => deal.car_id);

        const carCollection = db.collection('cars');
        const ownedCarsInfo = await carCollection.find({ _id: { $in: carIds.map(ObjectId) } }).toArray();

        return ownedCarsInfo;
    } catch (error) {
        console.error('Error fetching owned cars information:', error);
        throw new Error('Failed to fetch owned cars information');
    }
}


const dealerSpecificCars = async (dealerId) => {
    try {
        const client = await mongoConnection();
        const dealerCollection = client.collection('dealer');
        if (!dealerCollection) {
            throw new Error('Failed to access the dealer collection');
        }

        const dealer = await dealerCollection.findOne({ _id: ObjectId(dealerId) });

        if (!dealer) {
            throw new Error('Dealer not found');
        }

        return dealer.cars || [];
    } catch (error) {
        console.error('Error fetching dealer specific cars information:', error);
        throw new Error('Failed to fetch dealer specific cars information');
    }
};

export { availableCarDeals, ownedCars, dealerSpecificCars }