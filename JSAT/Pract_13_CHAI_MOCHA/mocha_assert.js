const chai = require("chai");
const assert = chai.assert;

describe("Counter Test With Assert", () => {
  let count = 0;
  beforeEach(() => {
    count = 0;
    console.log("The Counter set to 0");
  });

  it("It Should Start from 0", () => {
    assert.equal(count, 0);
  });

  it("It Should Increase from 1", () => {
    count++;
    assert.equal(count, 1);
  });

  it("It Should Increase by 2", () => {
    count++;
    count++;
    assert.equal(count, 2);
  });
});
