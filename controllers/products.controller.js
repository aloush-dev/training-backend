const {
  returnAllProducts,
  insertProduct,
} = require("../models/products.model");

exports.getAllProducts = (req, res) => {
  returnAllProducts().then((products) => {
    res.status(200).send({ products });
  });
};

exports.postProduct = (req, res) => {
  const { title, brand } = req.body;
  insertProduct(title, brand).then((product) => {
    res.status(201).send(product);
  });
};
