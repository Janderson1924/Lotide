const eqArrays = function (array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        return true;
      } else {
        return false;
      }
    }
  }
};

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



const without = function (source, itemsToRemove) {};