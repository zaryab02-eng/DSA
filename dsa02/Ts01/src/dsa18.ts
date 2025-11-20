function btwnTenAndtwnty(nums: number[]) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] >= 10 && nums[i] <= 20) {
      count = count + 1;
    }
  }
  console.log(count);
}

btwnTenAndtwnty([5, 10, 12, 18, 21, 20, 7, 19]);
