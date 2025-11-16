function dvsblBySix(num: number[]) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 6 === 0) {
      count = count + 1;
    }
  }
  console.log(`${count} numbers are divisible by 6`);
}

dvsblBySix([3, 5, 6, 12, 14, 18, 20, 24]);
