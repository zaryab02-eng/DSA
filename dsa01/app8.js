function evenNum(even) {
  for (let i = 0; i < even.length; i++) {
    if (even[i] % 2 === 0) {
      console.log(even[i]);
    }
  }
}

evenNum([1, 2, 3, 4, 5, 6, 7, 8, 9]);
