function evenAndGrtrThenTwnty(nums: number[]) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i] > 20) {
      count = count + 1;
    }
  }
  console.log(count);
}

evenAndGrtrThenTwnty([5, 22, 13, 40, 7, 28, 50, 19, 21]);
