function oddAndGrtrTwnty(nums: number[]) {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0 && nums[i] > 20) {
      count = count + 1;
    }
  }
  console.log(count);
}
oddAndGrtrTwnty([12, 5, 33, 44, 21, 19, 51, 22, 27]);
