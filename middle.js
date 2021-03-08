const assertArraysEqual = require('./assertArraysEqual.js')

const eqArrays = require('./eqArrays.js');

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
 module.exports = middle;


