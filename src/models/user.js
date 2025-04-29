const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    name: {type: String},
    surname: {type: String},
    nationality: {type: String},    
    birthYear: {type: Number}    
})

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel