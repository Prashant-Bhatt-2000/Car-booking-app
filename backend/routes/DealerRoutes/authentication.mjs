import express from 'express';
import dotenv from 'dotenv'
import { registerDealer, loginDealer, logoutDealer } from '../../functions/Dealer/Dealer_auth.mjs';
import { dealerMiddleware } from '../../middleware/Middleware.mjs'

const router = express.Router();

dotenv.config({ path : '../config/config.env'})

router.post('/register', async (req, res) => {
    const data = req.body;
    try {
        const dealerId = await registerDealer(data);
        return res.status(200).json({ dealerId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res)=> { 
    const dealership_email = req.body.dealership_email
    const password = req.body.password
    
    if(!dealership_email || !password){ 
        return res.status(400).json({ 'message': 'Required Fields are empty' })
    }

    try {
        const dealer = await loginDealer(dealership_email, password);
        return res.status(200).json({dealer})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


router.post('/logout', dealerMiddleware, logoutDealer)


export default router;
