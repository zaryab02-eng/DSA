function oddSumUnderFvfty(nums: number[]) {
  let oddNum = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0 && nums[i] < 50) {
      oddNum = nums[i] + oddNum;
    }
  }
  console.log(oddNum);
}

oddSumUnderFvfty([12, 5, 49, 60, 41, 18, 71, 33, 50, 7]);
