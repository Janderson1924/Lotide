const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const words = ["Yo Yo", "Lighthouse", "Labs"];

const tail = function(array) {
  return array.slice(1, 3);
};

console.log(tail(words));
