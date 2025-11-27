function starPattern(nums: number[]) {
  for (let i = 0; i < nums.length; i++) {
    let pattern = "";
    for (let j = 0; j <= i; j++) {
      pattern = pattern + "*";
    }
    console.log(pattern);
  }
}

starPattern([1, 2, 3, 4]);
