const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const cd = { a: "1", b: "2" };
const ef = { a: "1", b: "2" };
console.log(eqObjects(cd, ef)); 

const ab = { a: "1", b: "2", c: "3" };
const ba = { a: "3", b: "4" };
console.log(eqObjects(ab, ba));
