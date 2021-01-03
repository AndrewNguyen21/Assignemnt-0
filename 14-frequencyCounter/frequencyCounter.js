function frequencyCounter(word) {
  // Insert code here;
  letters = {};
  for (let i = 0; i < word.length; i++) {
    if (letters[word[i]]) {
      letters[word[i]]++;
    } else {
      letters[word[i]] = 1;
    }
  }
  return letters;
}

// Do not edit this line;
module.exports = frequencyCounter;
