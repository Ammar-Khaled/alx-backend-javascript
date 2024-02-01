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

describe("Cart page", () => {
  it("should have the correct status code with number id parameter", () => {
    request("http://localhost:7865/cart/1", (_error, response, _body) => {
      expect(response.statusCode).to.equal(200);
    });
  });

  it("should have the correct result with number id parameter", () => {
    request("http://localhost:7865/cart/1", (_err, _res, body) => {
      expect(body).to.contain("Payment methods for cart 1");
    });
  });

  it("should have error not found with status code 404", () => {
    request.get("http://localhost:7865/cart/abc", (_, res, body) => {
      expect(res.statusCode).to.equal(404);
    });
  });

  it("should have the correct body content with non number id parameter", () => {
    request("http://localhost:7865/cart/abc", (_error, _response, body) => {
      expect(body).to.contain("Cannot GET /cart/abc");
    });
  });

  it("should have the correct content type", () => {
    request("http://localhost:7865/cart/12", (_err, res, _body) => {
      expect(res.headers["content-type"]).to.equal("text/html; charset=utf-8");
    });
  });

  it("should have the correct content length", () => {
    request("http://localhost:7865/cart/12", (_err, res, _body) => {
      expect(res.headers["content-length"]).to.equal("27");
    });
  });
});
