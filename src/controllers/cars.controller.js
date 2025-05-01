const express = require("express");
const mongoose = require('mongoose');
const CarModel = require("../models/car");
const {CarValid,CarValidUpdate } = require("../validation/carsValidation");
const Joi = require("joi")

async function getAllCars(req, res) {
    const cars = await CarModel.find().populate("UserId")
    res.status(200).send(cars)
}

async function getOneById(req, res) {
    const id = req.params.id
    const car = await CarModel.findById(id).populate("UserId")
    res.status(200).send(car)
}

async function addNewCar(req, res) {
    const data = await CarValid.validateAsync(req.body)
    console.log(data);
    
    const car = new CarModel(data)

    await car.save()

    res.status(201).send(car)
}

async function editCar(req, res) {
    const id = req.params.id
    const data = await CarValidUpdate.validateAsync(req.body)
    const car = await CarModel.findByIdAndUpdate(id, data) 
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

