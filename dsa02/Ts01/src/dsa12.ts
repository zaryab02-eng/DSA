function dvsblByThree(num: number[]) {
  let count = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 === 0) {
      count = count + 1;
    }
  }
  console.log(`${count} numbers are divisible by 3`);
}

dvsblByThree([3, 5, 9, 11, 12, 14, 18]);
