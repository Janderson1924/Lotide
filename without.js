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

const without = function (source, itemsToRemove) {
  let results = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      results.push(source[i]);
    }
  } 
  return results;
};


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);