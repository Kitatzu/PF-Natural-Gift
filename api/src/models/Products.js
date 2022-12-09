const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,

  imageProduct: String,

  stock: Number,

  price: Number,

  description: String,

  inStock: {
    type: Boolean,
    default: true,
  },

  rating: Number,
  categories: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
  ],
});

const Products = mongoose.model("products", productSchema);
module.exports = Products;
