const assert = require('chai').assert;
const assertEqual = require('../assertEqual');


describe("should tell us if two items match or not", () => {
  it("returns yes if matching", () => {
    assert.strictEqual(assertEqual(19, 19));
  });
  it("returns no if different", () => {
    assert.strictEqual(assertEqual(4, 5)); 
  });
});