function grtrThnFive(num: number[]) {
  let count: number = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] > 5) {
      count = count + 1;
    }
  }
  console.log(`${count} numbers are greater than 5.`);
}

grtrThnFive([1, 9, 5, 7, 3, 12]);
