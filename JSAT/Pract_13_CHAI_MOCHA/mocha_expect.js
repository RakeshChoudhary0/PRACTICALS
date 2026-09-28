const chai = require("chai");

const expect = chai.expect;

describe("Counter Test", () => {
  let Count;

  before(function () {
    console.log("Before All Test");
  });

  beforeEach(function () {
    Count = 0;
    console.log("Before Each Test");
  });

  afterEach(function () {
    console.log("After Each Test");
  });

  after(function () {
    console.log("After All Test");
  });

  // Test 1
  it("It Should Start from 0", () => {
    expect(Count).to.equal(0);
  });

  // TEST 2

  it("it Should Increase by 1", () => {
    Count++;
    expect(Count).to.equal(1);
  })

  // Test 3
  it("it Should Increase By 2", () => {
    Count = Count + 2;
    expect(Count).to.equal(2);
  });
});
