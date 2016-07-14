const mongoose = require("mongoose");

const users = mongoose.Schema({
    
    name: String,
    email: String,
    price: Number,
    phone: Number,
    company: String,
    address: String,
    dateAdded: {type: Date, default: new Date()},
    isAdmin: Boolean,
    google: {
        id: String,
        token: String,
        email: String,
        name: String,        
    },
   
    
});




module.exports = mongoose.model(`users`, users);
//module.exports = mongoose.model(`google`, google)