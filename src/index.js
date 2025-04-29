const express = require("express");
const mongoose = require('mongoose');
const UserModel = require("./models/user");
const CarsRouter = require("./routes/cars.router");
const UsersRouter = require("./routes/users.router");


const app = express();
app.use(express.json());

(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/RomanCars');
    console.log('Connected!');
})();

app.use("/cars", CarsRouter)
app.use("/users", UsersRouter)

app.listen(5555, () => {
    console.log("Server running on port 5555!");
});