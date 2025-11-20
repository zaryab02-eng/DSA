function smallestNum(nums: number[]) {
  let smalstNum = Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smalstNum) {
      smalstNum = nums[i];
    }
  }
  console.log(smalstNum);
}

smallestNum([12, 5, 49, 60, 41, 18, 71, 33, 50, 7]);
