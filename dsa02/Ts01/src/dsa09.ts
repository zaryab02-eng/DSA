function oddSum(nums: number[]) {
  let oddNum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      oddNum = nums[i] + oddNum;
    }
  }
  console.log(oddNum);
}

oddSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
