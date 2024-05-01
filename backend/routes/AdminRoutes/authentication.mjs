import express from 'express';
import dotenv from 'dotenv'
import { registerAdmin, loginAdmin, logoutAdmin } from '../../functions/Admin/Admin_auth.mjs';
import { adminMiddleware } from '../../middleware/Middleware.mjs'

const router = express.Router();

dotenv.config({ path : '../config/config.env'})

router.post('/register', async (req, res) => {
    const data = req.body;
    try {
        const userId = await registerAdmin(data);
        return res.status(200).json({ userId });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
});


router.post('/login', async (req, res)=> { 
    const email = req.body.email
    const password = req.body.password
    
    if(!email || !password){ 
        return res.status(400).json({ 'message': 'Required Fields are empty' })
    }

    try {
        const user = await loginAdmin(email, password);
        return res.status(200).json({user})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


router.post('/logout', adminMiddleware, logoutAdmin)


export default router;
