function evenSum(nums: number[]) {
  let evenNum: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      evenNum = nums[i] + evenNum;
    }
  }
  console.log(evenNum);
}

evenSum([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
