function maxNum(nums) {
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      max = nums[i];
    }
  }
  console.log(max);
}

maxNum([22, 32, 42, 33, 65, 34, 78]);
