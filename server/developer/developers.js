const mongoose = require("mongoose");

const developers = mongoose.Schema({
    name: {type: String, required: true, trim: true},
    email: {type: String, required: true, trim: true},
    password: {type: String, required: true},
    users: {type: mongoose.Schema.Types.ObjectId, ref: `users`}
})


module.exports = mongoose.model(`developers`, developers)