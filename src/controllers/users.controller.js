const express = require("express");
const mongoose = require('mongoose');
const UserModel = require("../models/user");



(async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/RomanCars');
    console.log('Connected!');
})();

async function getAllUsers(req, res) {
    const users = await UserModel.find()
    res.status(200).send(users)
}

async function getOneById(req, res) {
    const id = req.params.id
    const user = await UserModel.findById(id)
    res.status(200).send(user)
}

async function addNewUser(req, res) {
    const { name, surname, nationality, birthYear } = req.body
    const user = new UserModel({
        name, surname, nationality, birthYear
    })

    await user.save()

    res.status(201).send(user)
}

async function editUser(req, res) {
    const id = req.params.id
    const { name, surname, nationality, birthYear } = req.body
    const user = await UserModel.findByIdAndUpdate(id, {
        name, surname, nationality, birthYear
    }) 
    await user.save()
    res.status(200).send({message: "Successfully Edited"})
}

async function deleteUser(req, res) {
    const id = req.params.id
    const user = await UserModel.findByIdAndDelete(id)

    res.status(200).send({message: "User successfully deleted!"})
}

module.exports = {
    getAllUsers, getOneById , addNewUser, editUser, deleteUser
}

