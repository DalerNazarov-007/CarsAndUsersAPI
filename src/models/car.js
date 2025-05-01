const { Schema, default: mongoose } = require("mongoose");

const CarSchema = new Schema({
    name: {
        type: String
    },
    type: {
        type: String
    },    
    color: {
        type: String
    },    
    year: {
        type: Number
    },
    UserId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users"
    },
},
    {
        timestamps: true
    }
)

const CarModel = mongoose.model("Cars", CarSchema)
module.exports = CarModel