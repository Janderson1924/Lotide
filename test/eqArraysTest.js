const assert = require('chai').assert;
const eqArrays = require('../eqArrays.js');


describe("should tell us if two arrays are equal", () => {
  it("returns true if matching", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
  it("returns false if different", () => {
    assert.strictEqual(eqArrays([1, 2, 3, 4], [1, 2, 3, 5]), false); 
  });
});