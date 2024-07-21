const Product = require("../models/Product");

//Get All products
const product_all = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};
//Single product
const single_Product = async (req, res) => {
  try {
    const products = await Product.findById(req.params.productId);
    res.json(products);
  } catch (error) {
    res.json({ message: error });
  }
};

//Add Product
const create_product = async (req, res) => {
  const product = new Product({
    title: req.body.title,
    price: req.body.price,
  });
  try {
    const savedProduct = await product.save();
    res.send(savedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};
//Update product

const update_product = async (req, res) => {
  try {
    const product = {
      title: req.body.title,
      price: req.body.price,
    };

    const updatedProduct = await Product.findByIdAndUpdate(
      {
        _id: req.params.productId,
      },
      product
    );
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).send(error);
  }
};

//Delete product
const delete_product = async (req, res) => {
  try{
    const removeProduct = await Product.findByIdAndDelete(req.params.productId)
    res.json(removeProduct)
  }
  catch(error){
    res.json({message: error})
  }
  

};

module.exports = {
  product_all,
  single_Product,
  create_product,
  update_product,
  delete_product,
};
