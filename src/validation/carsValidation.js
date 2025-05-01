const Joi = require("joi")

const CarValid = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    type: Joi.string().alphanum().required(),
    color: Joi.string().alphanum().required(),
    year: Joi.number().integer().min(2000).max(2025).required(),
    UserId: Joi.string().required()
})

const CarValidUpdate = Joi.object({
    name: Joi.string().alphanum().min(3).max(30),
    type: Joi.string().alphanum(),
    color: Joi.string().alphanum(),
    year: Joi.number().integer().min(2000).max(2025),
    UserId: Joi.string()
})
module.exports = {CarValid, CarValidUpdate }