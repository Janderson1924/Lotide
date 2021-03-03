const assertArraysEqual = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        console.log(`✅✅✅Assertion Passed: ${array1} === ${array2}`);
      } else if (array1 !== array2) {
        console.log(`🛑🛑🛑Assertion Failed: ${array1} !== ${array2}`);
      }
    }
  }
};

console.log(assertArraysEqual([1, 2], [1, 2]));