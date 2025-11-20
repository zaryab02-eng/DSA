function numEndWthfive(nums: number[]) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 5) {
      count = count + 1;
    }
  }
  console.log(count);
}

numEndWthfive([5, 15, 23, 45, 60, 75, 81, 95]);
