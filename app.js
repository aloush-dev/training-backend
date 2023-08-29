const express = require("express");
const { getAllProducts } = require("./controllers/products.controller");
const app = express();

app.get("/api/products", getAllProducts);

module.exports = app;
