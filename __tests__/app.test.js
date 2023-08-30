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

describe("GET /api/products", () => {
  test("200: lists all products", () => {
    return request(app)
      .get("/api/products")
      .expect(200)
      .then(({ body }) => {
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
  test("404: Path not Found if path doesnt exist, default 404 from express", () => {
    return request(app).get("/api/notfound").expect(404);
  });
});

describe("POST /api/products", () => {
  test("201: create and return the given product", () => {
    return request(app)
      .post("/api/products")
      .send({ title: "New Camera", brand: "New Cameras Brand" })
      .expect(201)
      .then(({ body }) => {
        expect(body).toEqual(
          expect.objectContaining({
            title: "New Camera",
            brand: "New Cameras Brand",
          })
        );
      });
  });
});
