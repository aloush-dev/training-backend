const db = require("../db/connection");
exports.returnAllProducts = () => {
  return db.query("SELECT * FROM products").then(({ rows }) => {
    return rows;
  });
};
