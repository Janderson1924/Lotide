const assertArraysEqual = function(firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(`✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`);
  }
};

const eqArrays = function(array1, array2) {
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

const middle = function(array) {
  let answer = [];
  if (array.length <= 2) {
    return answer;
  } else if (array.length % 2 === 0) {
    let index1 = array.length / 2 - 1;
    let index2 = array.length / 2;
    answer = [array[index1], array[index2]];
  } else {
    let index3 = Math.round(array.length / 2 - 1);
    answer = [array[index3]];
  }
  return answer;
};

console.log(middle([1, 2, 3, 4, 5]));


