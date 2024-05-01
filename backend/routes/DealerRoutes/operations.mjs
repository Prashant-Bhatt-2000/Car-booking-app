import express from 'express';
import { dealerMiddleware } from '../../middleware/Middleware.mjs'
import { addCars, addDeals, getSoldCars } from '../../functions/Dealer/Dealer_ops.mjs';

const router = express.Router();

router.post('/addcar', dealerMiddleware, async(req, res)=> { 
    const carData = req.body

    try {
        const result = await addCars(carData)
        return res.status(200).json({ result: result });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


router.post('/addDeals', dealerMiddleware, async(req, res)=> { 
    const dealData = req.body

    try {
        const result = await addDeals(dealData)
        return res.status(200).json({ result: result })
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


router.get('/getsoldcars/:dealerid', dealerMiddleware, async(req, res)=> { 
    const dealerid = req.params.dealerid

    try {
        const soldcars = await getSoldCars(dealerid)
        return res.status(200).json({ soldcars: soldcars})
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
})


export default router;
