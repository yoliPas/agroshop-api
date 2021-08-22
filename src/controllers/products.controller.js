const Product = require('../models/Product');

const getProducts = async (req, res)=>{
    const products = await Product.find();
    res.setHeader('content-type', 'application/json');
    res.json(products);
};

const createProduct = async (req, res)=>{
    const {name, category, price, contentNet, description, metodAplication, precaution, amount, toxology, maker}= req.body
    const newProduct = new Product({name, category, price, contentNet, description, metodAplication, precaution, amount, toxology, maker});   
    const productSave=  await newProduct.save();

    res.json(productSave)
};

module.exports={
    getProducts,
    createProduct
}