function setUnionOfAnyAmountOfSets(...args) {
  // Insert code here;
  var unionSet = new Set();
  for (i of args) {
    for (j of i) {
      if (!unionSet.has(j)) {
        unionSet.add(j);
      }
    }
  }
  return unionSet;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;
