const db = require("../db/connection");
exports.returnAllProducts = () => {
  return db.query("SELECT * FROM products").then(({ rows }) => {
    return rows;
  });
};

exports.insertProduct = (title, brand) => {
  return db
    .query("INSERT INTO products (title, brand) VALUES ($1, $2) RETURNING *;", [
      title,
      brand,
    ])
    .then(({ rows }) => {
      return rows[0];
    });
};
