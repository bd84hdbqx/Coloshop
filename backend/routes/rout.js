const express = require("express");
const router = express.Router();

const ProductRouter = require("./product.js");
router.use("/products", ProductRouter);

module.exports = router;
