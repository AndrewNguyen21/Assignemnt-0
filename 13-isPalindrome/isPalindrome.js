function isPalindrome(word) {
  // Insert code here;
  front = 0;
  back = word.length - 1;
  while (front <= back) {
    p1 = word[front];
    p2 = word[back];
    if (p1 != p2) {
      return false;
    }
    front++;
    back--;
  }
  return true;
}

// Do not edit this line;
module.exports = isPalindrome;
