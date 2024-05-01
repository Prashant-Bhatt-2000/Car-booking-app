import express from 'express'
import { availableCarDeals, ownedCars, dealerSpecificCars } from '../../functions/User/User_ops.mjs'
import { commonMiddleware } from '../../middleware/Middleware.mjs'


const router = express.Router()


router.get('/availablecars', commonMiddleware, async(req, res)=> { 
    const carModel = req.body
    try {
        const result = await availableCarDeals(carModel)

        return res.status(200).json({ cars: result })
    } catch (error) {
        return res.status(500).json({error: error.message})
    }
})

router.get('/ownedcars/:buyerid', commonMiddleware, async(req, res)=> { 
    const buyerid = req.params.buyerid

    try {
        const result = await ownedCars(buyerid)
        return res.status(200).json({ ownedcars: result })
    } catch (error) {
        return res.status(500).json({ error: error.message})
    }
})


router.get('dealerspecificcars/:dealerId', commonMiddleware, async(req, res)=> { 
    const dealerId = req.params.dealerId

    try {
        const result = await dealerSpecificCars(dealerId)
        return res.status(200).json({ cars: result})
    } catch (error) {
        return res.status(500).json({ error: error})
    }
})

export default router;
