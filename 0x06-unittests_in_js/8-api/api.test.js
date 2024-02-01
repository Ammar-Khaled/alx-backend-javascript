const request = require("request");
const expect = require("chai").expect;

describe("Index page", () => {
  it("should have the correct status code", () => {
    request.get("http://localhost:7865", (_, res) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it("should have the correct body", () => {
    request.get("http://localhost:7865", (_, res, body) => {
      expect(body).to.contain("Welcome to the payment system");
    });
  });

  it("should have the correct content type", () => {
    request("http://localhost:7865", (_, res) => {
      expect(res.headers["content-type"]).to.equal("text/html; charset=utf-8");
    });
  });

  it("should have the correct content length", () => {
    request("http://localhost:7865", (_, res) => {
      expect(res.headers["content-length"]).to.equal("29");
    });
  });
});
