const assertArraysEqual = function (firstArray, secondArray) {
  for (let i = 0; i < firstArray.length; i++) {
    for (let j = 0; j < secondArray.length; j++) {
      if (firstArray[i] === secondArray[j]) {
        console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
      } else if (firstArray !== secondArray) {
        console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
      }
    }
  }
};

console.log(assertArraysEqual([1, 2], [1, 2]));