const express = require("express");
const router = express.Router();

const productController = require('../Controllers/productController');

router.post("/add-product",productController.addProduct);
router.get("/products",productController.getAllProducts);
router.get("/product/:id",productController.getProduct);
router.get("/myproducts/:id",productController.getMyProducts);
router.delete("/delete/:id",productController.deleteProduct);
router.put("/update/:id",productController.updateProduct);

module.exports  = router
