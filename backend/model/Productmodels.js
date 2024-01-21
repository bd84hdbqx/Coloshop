const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    name: { type: String },
    img: { type: String },
    price: { type: Number },
  },
  {
    timestamps: true,
  }
);

const Products = mongoose.model("products", ProductSchema);
module.exports = Products;
