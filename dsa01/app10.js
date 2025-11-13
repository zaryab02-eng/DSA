function oddNum(nums) {
  count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 !== 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

oddNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
