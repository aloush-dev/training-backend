const app = require("../app");
const request = require("supertest");
const seed = require("../db/seed.js");
const testData = require("../db/data/test-data/index");
const db = require("../db/connection");

beforeEach(() => {
  return seed(testData);
});

afterAll(() => {
  return db.end();
});

describe("/api/products", () => {
  test("200: lists all products", () => {
    return request(app)
      .get("/api/products")
      .expect(200)
      .then(({ body }) => {
        console.log(body);
        expect(body.products.length).toBe(3);
        body.products.forEach((product) => {
          expect(product).toEqual(
            expect.objectContaining({
              title: expect.any(String),
              brand: expect.any(String),
            })
          );
        });
      });
  });
});
