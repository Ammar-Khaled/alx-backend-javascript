const assert = require("assert");
const { describe, it } = require("mocha");
const calculateNumber = require("./0-calcul");

describe("calculateNumber", () => {
  it("", () => {
    assert.deepStrictEqual(calculateNumber(1, 2), 3);
  });

  it("", () => {
    assert.deepStrictEqual(calculateNumber(1, 3.7), 5);
  });

  it("", () => {
    assert.deepStrictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it("", () => {
    assert.deepStrictEqual(calculateNumber(1.5, 3.7), 6);
  });
});
