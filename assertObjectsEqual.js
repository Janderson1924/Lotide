const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    console.log('They are NOT the same!');
  } else {
    for (let key in object1) {
      if ((Array.isArray(object1[key]) && Array.isArray(object2[key]))) {
        if (eqArrays(object1[key], object2[key]) === false) {
          console.log('They are NOT the same!');
        } else {
          if (object1[key] !== object2[key]) {
            console.log('They are NOT the same!');
          }
        }
      }
    }
    console.log('They ARE the same!!');
  }
};

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    return console.log(`✅✅✅Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    return console.log(`🛑🛑🛑Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`)
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
  
assertObjectsEqual(ab, ba);

const cd = { a: "1", b: "2" };
const ef = { a: "1", b: "2" };
  
assertObjectsEqual(cd, ef);

module.exports = assertObjectsEqual;