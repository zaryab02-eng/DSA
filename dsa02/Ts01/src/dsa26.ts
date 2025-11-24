function btwnTenAndThirtyAndEven(nums: number[]) {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 10 && nums[i] < 30 && nums[i] % 2 === 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

btwnTenAndThirtyAndEven([9, 15, 22, 30, 28, 11, 17, 24, 31, 18]);
