const User = { 
    useremail : {type: String, required: true, unique: true}, 
    userinfo: { 
        username: {type: String}, 
        phone: {type: Number}, 
        address: {type: String} 
    }, 
    password: {type: String, required:true}, 
    vehicleinfo: []
}

export default User