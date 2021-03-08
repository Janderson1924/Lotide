const assert = require('chai').assert;
const middle = require('../middle.js');

// tests
// console.log(middle([1, 2, 3, 4, 5, 6, 7]));
// console.log(middle([1, 2, 3, 4, 5]));

describe("should return middle element of a given array", () => {
  it("returns 2 for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
  it("returns 8 for [1, 4, 8, 3, 6]", () => {
    assert.deepEqual(middle([1, 4, 8, 3, 6]), [8]); 
  });
});