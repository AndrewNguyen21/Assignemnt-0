function sumOfMinimumAndMaximum(nums) {
  // Insert code here;
  var max = nums[0],
    min = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return max + min;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;
