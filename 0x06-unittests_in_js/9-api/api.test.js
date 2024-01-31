const request = require("request");
const expect = require("chai").expect;

describe("Index page", () => {
  it("", () => {
    request.get("http://localhost:7865", (_, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Welcome to the payment system");
    });
  });

  it("", () => {
    request.get("http://localhost:7865/cart/1", (_, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(body).to.equal("Payment methods for cart 1");
    });
  });

  it("", () => {
    request.get("http://localhost:7865/cart/a", (_, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });
});
