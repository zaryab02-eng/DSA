function greatestEvenNumFinder(arr: number[]) {
  let count: number = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0 && arr[i] > 10) {
      count = count + 1;
    }
  }
  console.log(count);
}

greatestEvenNumFinder([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]);
