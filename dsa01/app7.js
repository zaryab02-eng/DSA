function sumNum(nums) {
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum = sum + nums[i];
  }
  console.log(sum);
}

sumNum([4, 7, 2]);
