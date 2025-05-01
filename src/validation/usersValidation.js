const Joi = require("joi")

const UserValid = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    surname: Joi.string().alphanum().min(3).max(30).required(),
    nationality: Joi.string().alphanum().min(3).max(30).required(),
    birthYear:Joi.number().integer().min(1925).max(2006).required()
})

const UserValidUpdate = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    surname: Joi.string().alphanum().min(3).max(30),
    nationality: Joi.string().alphanum().min(3).max(30),
    birthYear:Joi.number().integer().min(1925).max(2006)
})
module.exports = {UserValid, UserValidUpdate}