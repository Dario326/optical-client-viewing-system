const mongoose = require("mongoose");

const pictures = mongoose.Schema({
//    name: {type: String, required: true, trim: true},
    url: String
})


module.exports = mongoose.model(`pictures`, pictures)