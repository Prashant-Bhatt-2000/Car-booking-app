import mongoConnection from "../../database/mongoConnection.mjs";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env'})
const registerAdmin = async (adminData) => {
    try {
        const client = await mongoConnection();
    
        const adminsCollection = client.collection('admin')
        if (!adminsCollection) {
            throw new Error('Failed to access the admin collection');
        }

        const existingUser = await adminsCollection.findOne({ email: adminData.email });
        if (existingUser) {
            const error = new Error('Email already exists');
            error.statusCode = 400; 
            throw error;
        }

        const hashedPassword = await bcrypt.hash(adminData.password, 10);

        const newUser = {
            name: adminData.name,
            email: adminData.email,
            password: hashedPassword,
            role: "admin"
        };

        const result = await adminsCollection.insertOne(newUser);
        console.log('Admin registered:', result.insertedId);
        return result.insertedId;
    } catch (error) {
        if (error.statusCode) {
            throw error; 
        }
        const customError = new Error('Failed to register admin');
        customError.statusCode = 500;
        throw customError;
    }
};



const loginAdmin = async (email, password, res) => {
    try {
        const client = await mongoConnection();

        const adminsCollection = client.collection('admin');
        if (!adminsCollection) {
            throw new Error('Failed to access the collection');
        }

        const findUser = await adminsCollection.findOne({ email: email });
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
        const secretKey = process.env.JWT_SECRET_ADMIN

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


const logoutAdmin = async(res, req)=> { 
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

export { registerAdmin, loginAdmin, logoutAdmin };
