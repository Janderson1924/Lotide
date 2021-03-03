const without = function (source, itemsToRemove) {
  let results = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      results.push(source[i]);
    } else {
      return results;
    }
  }
};

console.log(without([1, 2, 3], [1]));