const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

// assertEqual tests
// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);

describe("should tell us if two items match or not", () => {
  it("returns yes if matching", () => {
    assert.strictEqual(assertEqual(19, 19));
  });
  it("returns no if different", () => {
    assert.strictEqual(assertEqual(4, 5)); 
  });
});