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

describe("available_payments endpoint", () => {
  it("get available payments", () => {
    request.get("http://localhost:7865/available_payments", (_, res, body) => {
      expect(res.statusCode).to.equal(200);
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
    });
  });
});

describe("login endpoint", () => {
  it("login with ammar", () => {
    const options = {
      url: "http://localhost:7865/login",
      json: { userName: "ammar" },
    };
    request.post(options, (_, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal("Welcome ammar");
    });
  });
});
