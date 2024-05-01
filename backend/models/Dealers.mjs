const Dealer = { 
    dealership_email : {type: String, required: true, unique: true},
    dealership_name: {type: String, required: true}, 
    dealership_location: {type: String, required: true}, 
    dealership_info: { 
        phone: {type: Number}, 
        deal_offered: {type: String, enum: ['Rent', 'Buy']}
    },
    cars: [], 
    deals: [], 
    sold_vechiles: []
}

export default Dealer