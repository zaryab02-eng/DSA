function sumOfDvsblBySix(nums: number[]) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 6 === 0) {
      sum = nums[i] + sum;
    }
  }
  console.log(sum);
}

sumOfDvsblBySix([3, 6, 12, 18, 20]);
