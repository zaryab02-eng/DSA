function secondLargetNum(arr: number[]) {
  let lrgstNum = arr[0];
  let scndLrgst = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > lrgstNum) {
      lrgstNum = arr[i];
    }
  }
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] < lrgstNum && arr[j] > scndLrgst) {
      scndLrgst = arr[j];
    }
  }
  console.log(scndLrgst);
}

secondLargetNum([1, 2, 3, 4, 5, 6, 7, 8]);
