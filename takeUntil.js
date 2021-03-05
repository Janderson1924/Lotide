const takeUntil = function(array, callback) {
  let results = [];               //creating empty array to populate
  for (let element of array) {    //loops through the array
    if (callback(element) == false) { //if the element doesnt satisfy callback 
      results.push(element);     // =>push into the results array
    } else {
      break;                    //otherwise stop
    }
  }
  return results;
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
console.log(results2);