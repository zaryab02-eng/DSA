function maxNum(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}

maxNum([12, 32, 54, 21, 76, 54, 87, 23, 65, 97, 54, 24]);
