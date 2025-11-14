function grtstNum(arr: number[]) {
  let greatestNum = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > greatestNum) {
      greatestNum = arr[i];
    }
  }
  console.log(greatestNum);
}

grtstNum([10, 2, 99, 43, 56]);
