// function findLargest(num) {
//   let largest = num[0];
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > largest) {
//       largest = num[i];
//     }
//   }
//   return largest;
// }

// console.log(findLargest([3, 8, 2, 10, 5]));

// function findSmallest(num) {
//   let smallest = num[0];
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] < smallest) {
//       smallest = num[i];
//     }
//   }
//   return smallest;
// }

// console.log(findSmallest([3, 8, 2, 10, 5]));

// function sumArray(num) {
//   let sum = 0;
//   for (let i = 0; i < num.length; i++) {
//     sum = num[i] + sum;
//   }
//   return sum;
// }

// console.log(sumArray([3, 8, 2, 10, 5]));

// function countEven(num) {
//   let evenCount = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       evenCount++;
//     }
//   }
//   return evenCount;
// }

// console.log(countEven([3, 8, 2, 10, 5]));

// function containsNumber(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(containsNumber([3, 8, 2, 10, 5], 10));

function firstEven(num) {
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      return num[i];
    }
  }
  return;
}

console.log(firstEven([1, 3, 5]));
