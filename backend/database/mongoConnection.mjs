import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config({ path: './config/config.env' });

const client = new MongoClient(process.env.Mongo_uri);
const mongoConnection = async () => {
    try {
        await client.connect();
        
        if (client) {
            console.log('MongoDB connected', client.db());
            return client.db();
        } else {
            console.log('MongoDB connection failed');
        }
        console.log(process.env.Mongo_uri);
    } catch (error) {
        console.error('MongoDB connection error:', error);
    }
};

export default mongoConnection;
