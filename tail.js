const assertEqual = function(actual,expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);


const words = ["Yo Yo", "Lighthouse", "Labs", "Dawg"];

const tail = function(array) {
  return array.slice(1, 4);
};

console.log(tail(words));
