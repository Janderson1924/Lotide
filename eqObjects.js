const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  if (assertEqual(object1, object2) === true) {
    console.log(`${object1} and ${object2} are the same`);
  } else {
    console.log(`${object1} and ${object2} are NOT the same`)
  }
};


const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba);

