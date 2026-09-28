const chai = require("chai");

chai.should();

describe("Counter Test -- should Style", () => {
  let Count = 0;

  before(() => {
    console.log("Before the Should Test");
  });
  beforeEach(() => {
    Count = 0;
    console.log("Before Each Test Set Count 0");
  });
  afterEach(() => {
    console.log("After Each Test");
  });
  after(() => {
    console.log("After the Should Test");
  });

  // Test 1
  it("it should Be Start at 0", () => {
    Count.should.equal(0);
  });

  it("it Should be Increse by 1", () => {
    Count++;
    Count.should.equal(1);
  });
  it("it Should be Increse by 2", () => {
    Count++;
    Count++;
    Count.should.equal(2);
  });
});
