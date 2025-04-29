const express = require("express")
const { getAllUsers, getOneById, addNewUser, editUser, deleteUser } = require("../controllers/users.controller")




const UsersRouter = express.Router()

UsersRouter.get("/", getAllUsers)
UsersRouter.get("/:id", getOneById)
UsersRouter.post("/", addNewUser)
UsersRouter.put("/:id", editUser)
UsersRouter.delete("/:id", deleteUser)

module.exports = UsersRouter
