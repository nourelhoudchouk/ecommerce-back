const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    img: { type: String, required: true },
    categories: { type: Array },
    size: { type: Array },
    color: { type: Array },
    price: { type: Number, required: true },
    inStock: { type: Boolean, default: true }
})
module.exports = mongoose.model('Product', productSchema);

