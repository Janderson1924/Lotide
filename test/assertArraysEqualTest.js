const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual.js')


describe("should tell us if two arrays are equal", () => {
  it("returns yes if matching", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  });
  it("returns no if different", () => {
    assert.deepEqual(assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 5])); 
  });
});