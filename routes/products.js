const express = require('express');

const productsController = require("../controllers/product");

const router = express.Router();

const path = require('path')


router.get("/",productsController.fetchAll);

router.get("/form",productsController.getAddproducts);


router.post("/form",productsController.postAddproducts);
  
  

module.exports = router;
