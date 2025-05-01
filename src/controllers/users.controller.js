const express = require("express");
const mongoose = require('mongoose');
const UserModel = require("../models/user");
const {UserValid, UserValidUpdate} = require("../validation/usersValidation");
const Joi = require("joi")


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
    const data = await UserValid.validateAsync(req.body)
    const user = new UserModel(data)
    await user.save()

    res.status(201).send(user)
}

async function editUser(req, res) {
    const id = req.params.id
    const data = await UserValidUpdate.validateAsync(req.body)
    await UserModel.findByIdAndUpdate(id, data) 
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

