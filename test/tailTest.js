const assert = require("chai").assert;
const tail = require("../tail.js");

describe("should show 'tail' of given array (all but the first item)", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
  it("returns [4, 8, 3] for [1, 4, 8, 3]", () => {
    assert.deepEqual(tail([1, 4, 8, 3]), [4, 8, 3]);
  });
});
