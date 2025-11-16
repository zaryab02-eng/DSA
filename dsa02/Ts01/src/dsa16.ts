function sumGreaterThanTen(nums: number[]) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10) {
      sum = sum + nums[i];
    }
  }
  console.log(sum);
}

sumGreaterThanTen([5, 12, 3, 25, 7, 18]);
