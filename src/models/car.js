const { Schema, default: mongoose } = require("mongoose");

const CarSchema = new Schema({
    name: {
        type: String,
        maxLength: 30
    },
    type: {
        type: String,
        enum: ["sedan", "SUV", "coupe", "hatchback", "MUV", "convertible", "pickup", "crossover"],
    },    
    color: {
        type: String
    },    
    year: {
        type: Number,
        min: [2000,"We can not take cars constructed before 2000"],
        max: 2025
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