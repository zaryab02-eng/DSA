function largestMultipleOf3(num) {
  let largestMultipleOf3 = null;
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 3 === 0 && num[i] > largestMultipleOf3) {
      largestMultipleOf3 = num[i];
    }
  }
  if (largestMultipleOf3 === null) {
    return -1;
  }
  return largestMultipleOf3;
}
console.log(largestMultipleOf3([5, 9, 12, 7, 18, 10]));
