function findMin(nums: number[]) {
  let smallestNum: number = nums[0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] < smallestNum) {
      smallestNum = nums[i];
    }
  }
  console.log(smallestNum);
}

findMin([6, 3, 2, 5, 7, 9]);
