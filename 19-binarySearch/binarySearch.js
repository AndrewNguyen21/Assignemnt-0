class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    // Insert code here;
    if (nums.length === 0) {
      return false;
    } else {
      let mid = Math.floor(nums.length / 2);

      if (nums[mid] === target) {
        return true;
      } else {
        if (nums[mid] < target) {
          return this.binarySearch(nums.slice(mid + 1), target);
        } else if (nums[mid] > target) {
          return this.binarySearch(nums.slice(0, mid), target);
        }
      }
    }
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;
