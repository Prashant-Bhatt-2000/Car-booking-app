import mongoConnection from "../../database/mongoConnection.mjs";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config({ path: './config/config.env'})

const registerUser = async (userData) => {
    try {
        const client = await mongoConnection();
    
        const usersCollection = client.collection('user')
        if (!usersCollection) {
            throw new Error('Failed to access the user collection');
        }

        const existingUser = await usersCollection.findOne({ email: userData.email });
        if (existingUser) {
            const error = new Error('Email already exists');
            error.statusCode = 400; 
            throw error;
        }

        const hashedPassword = await bcrypt.hash(userData.password, 10);

        const newUser = {
            useremail: userData.useremail,
            phone: userData.phone,
            address: userData.address,
            password: hashedPassword,
        };

        const result = await usersCollection.insertOne(newUser);
        console.log('User registered:', result.insertedId);
        return result.insertedId;
    } catch (error) {
        if (error.statusCode) {
            throw error; 
        }
        const customError = new Error('Failed to register user');
        customError.statusCode = 500;
        throw customError;
    }
};



const loginUser = async (useremail, password) => {
    try {
        const client = await mongoConnection();

        const usersCollection = client.collection('user');
        if (!usersCollection) {
            throw new Error('Failed to access the collection');
        }

        const findUser = await usersCollection.findOne({ useremail: useremail });
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
        const secretKey = process.env.JWT_SECRET

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


const logoutUser = async(res, req)=> { 
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

export { registerUser, loginUser, logoutUser };
