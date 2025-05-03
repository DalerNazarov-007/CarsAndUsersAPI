const { Schema, default: mongoose } = require("mongoose");

const UserSchema = new Schema({
    name: {
        type: String,
        minLength: 5,
        maxLength: 30
    },
    surname: {
        type: String,
        minLength: 5,
        maxLength: 30
    },
    nationality: {
        type: String,
        minLength: 5,
        maxLength: 30  
    },    
    birthYear: {
        type: Number,
        min: [1950, "Please, relax. You should have a rest instead!"],
        max: [2018, "You should be at least 7!"]
    }
}, 
    {
        timestamps: true,
    }    
)

const UserModel = mongoose.model("Users", UserSchema)
module.exports = UserModel