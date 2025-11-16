function sumOfDvsbleByThree(num: number[]) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 === 0) {
      sum = num[i] + sum;
    }
  }
  console.log(sum);
}

sumOfDvsbleByThree([3, 5, 9, 11, 12, 14, 18]);
