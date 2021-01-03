function pairSum(nums, target) {
  // Insert code here
  var sum = 0;
  if (nums.length < 2) {
    throw error;
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      sum = nums[i] + nums[j];
      if (sum == target) {
        return true;
      }
    }
  }
  return false;
}

// Do not edit this line;
module.exports = pairSum;
