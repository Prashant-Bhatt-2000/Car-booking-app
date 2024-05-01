const Deals = { 
    car_id: { type: String, required: true }, 
    deal_info: { 
        buyer: { type: String, required: true },
        dealer: { type: String, required: true }
    }
};

export default Deals