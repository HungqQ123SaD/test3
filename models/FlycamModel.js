const mongoose = require('mongoose')

var FlycamSchema = mongoose.Schema({
    category: String,
    name: String,
    price: Number,
    image: String,
    quantity : Number
})

const FlycamModel = mongoose.model("flycam", FlycamSchema, "flycam")

module.exports = FlycamModel