function largestNum(nums: number[]) {
  let lrgstNum = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > lrgstNum) {
      lrgstNum = nums[i];
    }
  }
  console.log(lrgstNum);
}

largestNum([12, 5, 49, 60, 41, 18, 71, 33, 50, 7]);
