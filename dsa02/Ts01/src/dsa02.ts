function reverseNum(arr: number[]) {
  for (let i = arr.length - 1; i >= 0; i--) {
    console.log(`Index: ${i}, Value: ${arr[i]}`);
  }
}

reverseNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
