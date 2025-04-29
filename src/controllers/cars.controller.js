const express = require("express");
const mongoose = require('mongoose');
const CarModel = require("../models/car");



(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/RomanCars');
    console.log('Connected!');
})();

async function getAllCars(req, res) {
    const cars = await CarModel.find()
    res.status(200).send(cars)
}

async function getOneById(req, res) {
    const id = req.params.id
    const car = await CarModel.findById(id)
    res.status(200).send(car)
}

async function addNewCar(req, res) {
    const { name, type, color, year } = req.body
    const car = new CarModel({
        name, year, type, color
    })

    await car.save()

    res.status(201).send(car)
}

async function editCar(req, res) {
    const id = req.params.id
    const { name, type, color, year } = req.body
    const car = await CarModel.findByIdAndUpdate(id, {
        name, type, color, year
    }) 
    await car.save()
    res.status(200).send({message: "Sucessfully edited!"})
}

async function deleteCar(req, res) {
    const id = req.params.id
    const car = await CarModel.findByIdAndDelete(id)

    res.status(200).send({message: "Car successfully deleted!"})
}

module.exports = {
    getAllCars, getOneById , addNewCar, editCar, deleteCar
}

