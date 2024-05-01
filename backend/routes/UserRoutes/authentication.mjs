import express from 'express';
import dotenv from 'dotenv'
import { registerUser, loginUser, logoutUser } from '../../functions/User/User_auth.mjs';
import { commonMiddleware } from '../../middleware/Middleware.mjs';

const router = express.Router();

dotenv.config({ path : '../config/config.env'})

router.post('/register', async (req, res) => {
    const data = req.body;
    try {
        const userId = await registerUser(data);
        return res.status(200).json({ userId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res)=> { 
    const useremail = req.body.useremail
    const password = req.body.password
    
    if(!useremail || !password){ 
        return res.status(400).json({ 'message': 'Required Fields are empty' })
    }

    try {
        const user = await loginUser(useremail, password);
        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


router.post('/logout', commonMiddleware, loginUser)


export default router;
