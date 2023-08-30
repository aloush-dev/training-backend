const express = require("express");
const {
  getAllProducts,
  postProduct,
} = require("./controllers/products.controller");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/", (req, res) => {
  res.status(200).send({ msg: "server is running" });
});

app.get("/api/products", getAllProducts);

app.post("/api/products", postProduct);

module.exports = app;
