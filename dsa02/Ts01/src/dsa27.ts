function multiOfFourNdSix(nums: number[]) {
  let count: number = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 4 === 0 && nums[i] % 6 === 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

multiOfFourNdSix([4, 6, 8, 12, 18, 24, 30, 36, 40, 48]);
