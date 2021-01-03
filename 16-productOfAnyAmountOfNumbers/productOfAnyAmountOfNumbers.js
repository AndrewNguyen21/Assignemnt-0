function productOfAnyAmountOfNumbers(...args) {
  // Insert code here;
  let product = 1;
  for (let i of args) {
    product *= i;
  }
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;
