// const assertEqual = require('../assertEqual.js')
// const head = require('../head.js')

//tests
// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

const assert = require('chai').assert;
const head = require('../head.js');

describe("should return first item in an array", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
});

describe("should return first item in an array", () => {
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['6']), '6');
  });
});
