const mongoose = require("mongoose")
const mongoosePaginate = require("mongoose-paginate-v2")

// Se crea el schema y el model de productos
const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    thumbnail: {
        type: String,
    },
    code: {
        type: String,
        required: true,
        unique: true
    },
    stock: {
        type: Number,
        required: true
    },
    status: {
        type: Boolean,
        required: true
    },
    thumbnails: {
        type: [String],
    },
})

productSchema.plugin(mongoosePaginate)

const ProductModel = mongoose.model("products", productSchema)

module.exports = ProductModel