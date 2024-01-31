const getPaymentTokenFromAPI = require("./6-payment_token");
const chai = require("chai");
const expect = chai.expect;

describe("getPaymentTokenFromAPI", () => {
  it("", (done) => {
    getPaymentTokenFromAPI(true).then((res) => {
      expect(res).to.deep.equal({ data: "Successful response from the API" });
    });
    done();
  });
});
