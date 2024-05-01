import { ObjectId } from "bson";

const Sold_Vechiles= { 
    car_id: {type: ObjectId}, 
    vechicle_info: { 
        sold_to: {type: ObjectId}, 
        sold_by: {type: ObjectId}
    }
}