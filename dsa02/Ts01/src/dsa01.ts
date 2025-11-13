function sumOfNum(arr: number[]) {
  let sum: number = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  console.log(sum);
}

sumOfNum([2, 4, 2, 2]);
