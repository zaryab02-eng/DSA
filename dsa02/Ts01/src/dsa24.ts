function countTen(nums: number[]) {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 10) {
      count = count + 1;
    }
  }
  console.log(count);
}

countTen([10, 5, 10, 20, 33, 10, 41, 10, 7, 10]);
