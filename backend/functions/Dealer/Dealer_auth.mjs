import mongoConnection from "../../database/mongoConnection.mjs";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env'})

const registerDealer = async (dealerData) => {
    try {
        const client = await mongoConnection();
    
        const dealersCollection = client.collection('dealer');
        if (!dealersCollection) {
            throw new Error('Failed to access the dealer collection');
        }

        const { dealership_email, dealership_name, dealership_location, dealership_info, password } = dealerData;

        const existingUser = await dealersCollection.findOne({ dealership_email });
        if (existingUser) {
            const error = new Error('Email already exists');
            error.statusCode = 400; 
            throw error;
        }

        const existingPhone = await dealersCollection.findOne({ 'dealership_info.phone': dealership_info.phone });
        if (existingPhone) {
            const error = new Error('Phone number already exists');
            error.statusCode = 400; 
            throw error;
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = {
            dealership_email,
            dealership_name,
            dealership_location,
            dealership_info: { 
                phone: dealership_info.phone, 
                deal_offered: dealership_info.deal_offered
            },
            password: hashedPassword,
            role: "dealer"
        };

        const result = await dealersCollection.insertOne(newUser);
        console.log('Dealer registered:', result.insertedId);
        return result.insertedId;
    } catch (error) {
        if (error.statusCode) {
            throw error; 
        }
        const customError = new Error('Failed to register dealer');
        customError.statusCode = 500;
        throw customError;
    }
};



const loginDealer = async (dealership_email, password) => {
    try {
        const client = await mongoConnection();

        const dealersCollection = client.collection('dealer');
        if (!dealersCollection) {
            throw new Error('Failed to access the collection');
        }

        const findUser = await dealersCollection.findOne({ dealership_email });
        if (!findUser) {
            const error = new Error('Invalid Credentials');
            error.statusCode = 400; 
            throw error;
        }

        const checkPassword = await bcrypt.compare(password, findUser.password);
        if (!checkPassword) {
            const error = new Error('Invalid Credentials');
            error.statusCode = 400;
            throw error;
        }

        const payload = {
            id: findUser._id, 
            email: findUser.email,
        };
        const secretKey = process.env.JWT_SECRET_DEALER

        const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });
        
        res.cookie('token', token, { httpOnly: true, expiresIn: 3600000 }); 

        return { message: 'Login Successful', token: token };
    } catch (error) {
        if (error.statusCode) {
            throw error;
        }
        return { error: 'Failed to login', statusCode: 500 };
    }
};


const logoutDealer = async(res, req)=> { 
    try{ 
        res.clearCookie('token', { expires: new Date(0) });

        return res.status(200).json({ message: "logout success"})
    }catch(error){ 
        if (error.statusCode) {
            throw error;
        }
        return { error: 'Failed to logout', statusCode: 500 };
    }
}


export { registerDealer, loginDealer, logoutDealer };
