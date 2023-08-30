const express = require("express");
const { getAllProducts, postProduct } = require("./controllers/products.controller");
const app = express();

app.use(express.json())

app.get("/api/products", getAllProducts);

app.post("/api/products", postProduct)

module.exports = app;
