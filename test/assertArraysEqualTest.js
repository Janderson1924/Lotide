const eqArrays = require('../eqArrays.js');
const assertArraysEqual = require('../assertArraysEqual.js')

//tests
console.log(eqArrays([1, 2, 3], [1, 2, 3]));
assertArraysEqual([1, 2, 3, 4], [1, 2, 3, 5]);