const express = require("express");
const router = express.Router();
const Products = require("../model/Productmodels");

//post
router.post("/", async (req, res) => {
  const newproducts = new Products(req.body);
  await newproducts.save();
  res.send(newproducts);
});
//get
router.get("/", async (req, res) => {
  const allproducts = await Products.find();
  res.send(allproducts);
});
//get by id
router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const oneProduct = await Products.findById(id);
  res.send(oneProduct);
});
//delete
router.delete("/:id", async (req, res) => {
  const id = req.params.id;
  const deleteProduct = await Products.findByIdAndDelete(id);
  res.send(deleteProduct);
});
module.exports = router;
