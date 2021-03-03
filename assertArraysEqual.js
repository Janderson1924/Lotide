const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    } else if (array1[i] === array2[i]) {
    }
  }
  return true;
};


const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};
// console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 5]);
