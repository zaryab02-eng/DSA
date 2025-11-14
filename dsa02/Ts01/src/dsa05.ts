function countNegative(arr: number[]) {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
      count = count + 1;
    }
  }
  console.log(count);
}

countNegative([2, -5, 7, -1, 0, 9, -12]);
