
const Product = require("../models/product");

exports.getAddproducts = (req,res)=>{
    
res.render("form",{title:"Add Product form"})
  
}

exports.postAddproducts = (req,res)=>{
  const product = new Product(req.body.title);
  product.save();
 res.send("Saved");  
}

exports.fetchAll = (req,res)=>{
  const products = Product.fetchAll();
    res.render("products",{products});  
   };