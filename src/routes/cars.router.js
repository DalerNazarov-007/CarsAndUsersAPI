const express = require("express")
const { getAllCars, getOneById, addNewCar, editCar, deleteCar } = require("../controllers/cars.controller")



const CarsRouter = express.Router()

CarsRouter.get("/", getAllCars)
CarsRouter.get("/:id", getOneById)
CarsRouter.post("/", addNewCar)
CarsRouter.put("/:id", editCar)
CarsRouter.delete("/:id", deleteCar)

module.exports = CarsRouter
