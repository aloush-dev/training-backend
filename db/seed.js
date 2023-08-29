const db = require("./connection");
const format = require("pg-format");

const seed = ({ productData }) => {
  return db
    .query("DROP TABLE IF EXISTS products;")
    .then(() => {
      return db.query(`CREATE TABLE products (
        product_id SERIAL PRIMARY KEY,
        title VARCHAR NOT NULL,
        brand VARCHAR NOT NULL
    );`);
    })
    .then(() => {
      const queryString = format(
        "INSERT INTO products (title, brand) VALUES %L RETURNING *;",
        productData.map(({ title, brand }) => [title, brand])
      );
      return db.query(queryString);
    })
    .catch((err) => console.log(err));
};

module.exports = seed;
