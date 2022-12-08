const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,

  imageProduct: String,

  stock: Number,

  price: Number,

  description: Text,

  inStock: {
    type: Boolean,
    default: true,
  },

  rating: Number,
  categories: [
    {
      type: Schema.Types.ObjectId,
      ref: "categories",
    },
  ],
});

const Products = mongoose.Model("products", productSchema);
module.exports = Products;
