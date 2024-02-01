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

describe("available_payments endpoint", () => {
  it("should have the correct status code", () => {
    request.get("http://localhost:7865/available_payments", (_, res, body) => {
      expect(res.statusCode).to.equal(200);
    });
  });

  it("should have the correct response body", () => {
    request.get("http://localhost:7865/available_payments", (_, res, body) => {
      expect(JSON.parse(body)).to.deep.equal({
        payment_methods: { credit_cards: true, paypal: false },
      });
    });
  });

  it("should have the correct content type", () => {
    request("http://localhost:7865/available_payments", (_, res, body) => {
      expect(res.headers["content-type"]).to.equal(
        "application/json; charset=utf-8"
      );
    });
  });

  it("should have the correct content length", () => {
    request(
      "http://localhost:7865/available_payments",
      (_error, res, _body) => {
        expect(res.headers["content-length"]).to.equal("56");
      }
    );
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

  it("should have the correct status code", () => {
    const formData = {
      userName: "Betty",
    };
    request.post(
      {
        url: "http://localhost:7865/login",
        body: formData,
        json: true,
      },
      (_, res, body) => {
        expect(res.statusCode).to.equal(200);
      }
    );
  });

  it("should have the correct result with form data value", () => {
    const formData = {
      userName: "Betty",
    };
    request.post(
      {
        url: "http://localhost:7865/login",
        body: formData,
        json: true,
      },
      (_, res, body) => {
        expect(body).to.contain("Welcome Betty");
      }
    );
  });

  it("should have the correct status with invalid get value", () => {
    const formData = {
      username: "Betty",
    };
    request.post(
      {
        url: "http://localhost:7865/login",
        body: formData,
        json: true,
      },
      (_, res, body) => {
        expect(res.statusCode).to.equal(404);
      }
    );
  });

  it("should have the correct content type", () => {
    const formData = {
      userName: "Betty",
    };
    request.post(
      {
        url: "http://localhost:7865/login",
        body: formData,
        json: true,
      },
      (_err, res, _body) => {
        expect(res.headers["content-type"]).to.equal(
          "text/html; charset=utf-8"
        );
      }
    );
  });

  it("should have the correct content length", () => {
    const formData = {
      userName: "Betty",
    };
    request.post(
      {
        url: "http://localhost:7865/login",
        body: formData,
        json: true,
      },
      (_, res, body) => {
        expect(res.headers["content-length"]).to.equal("13");
      }
    );
  });
});
