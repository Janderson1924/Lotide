const eqArrays = require("./eqArrays.js");

const assertArraysEqual = function (firstArray, secondArray) {
  if (eqArrays(firstArray, secondArray) === true) {
    return console.log(
      `✅✅✅Assertion Passed: ${firstArray} === ${secondArray}`
    );
  } else {
    return console.log(
      `🛑🛑🛑Assertion Failed: ${firstArray} !== ${secondArray}`
    );
  }
};

module.exports = assertArraysEqual;
