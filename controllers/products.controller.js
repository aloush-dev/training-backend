const { returnAllProducts } = require("../models/products.model");

exports.getAllProducts = (req, res) => {
  returnAllProducts().then((products) => {
    res.status(200).send({ products });
  });
};
