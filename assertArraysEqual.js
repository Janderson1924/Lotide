const assertArraysEqual = function(firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    if (firstArray[i] !== secondArray[i]) {
      return `🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`;
    }
  }
  return `✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`;
};

console.log(assertArraysEqual([1, 2, 3, 4, 5], [1, 2, 3, 4]));