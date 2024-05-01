const Cars = { 
    cartype: {type: String, required: true}, 
    name: {type: String, required: true}, 
    model: {type: String, required: true}, 
    carinfo: { 
        manufacturer: {type: String, required: true},
        year: {type: Number, required: true},
        color: {type: String, required: true},
        mileage: {type: Number, required: true},
        condition: {type: String, enum: ['new', 'used'], required: true},
        price: {type: Number, required: true},
        features: [String],
        description: {type: String}
    }
}

export default Cars;
