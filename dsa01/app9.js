let nums = [10, 22, 5, 8, 40, 15];
function maxNum() {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}

maxNum(nums);
