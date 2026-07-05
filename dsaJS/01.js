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

// function firstEven(num) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0) {
//       return num[i];
//     }
//   }
//   return;
// }

// console.log(firstEven([1, 3, 5]));

// function indexOfNumber(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(indexOfNumber([3, 8, 2, 10, 5], 8));

// function reverseArray(num) {
//   let result = [];
//   for (let i = num.length - 1; i >= 0; i--) {
//     result.push(num[i]);
//   }
//   return result;
// }

// console.log(reverseArray([3, 8, 2, 10]));

// function countOccurrences(num, target) {
//   let count = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//       count++;
//     }
//   }
//   return count;
// }

// console.log(countOccurrences([3, 8, 2, 8, 10, 8], 8));

// function getOddNumbers(num) {
//   let odd = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0) {
//       odd.push(num[i]);
//     }
//   }
//   return odd;
// }

// console.log(getOddNumbers([3, 8, 2, 7, 10, 5]));

// function secondLargest(num) {
//   let largest;
//   let secondLargestNum;

//   if (num[0] > num[1]) {
//     largest = num[0];
//     secondLargestNum = num[1];
//   } else {
//     largest = num[1];
//     secondLargestNum = num[0];
//   }

//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > largest) {
//       secondLargestNum = largest;
//       largest = num[i];
//     } else if (num[i] > secondLargestNum) {
//       secondLargestNum = num[i];
//     }
//   }
//   return secondLargestNum;
// }

// console.log(secondLargest([18, 12, 5]));

// function secondSmallest(num) {
//   let smallestNum;
//   let secondSmallestNum;

//   if (num[0] < num[1]) {
//     smallestNum = num[0];
//     secondSmallestNum = num[1];
//   } else {
//     smallestNum = num[1];
//     secondSmallestNum = num[0];
//   }

//   for (let i = 0; i < num.length; i++) {
//     if (num[i] < smallestNum) {
//       secondSmallestNum = smallestNum;
//       smallestNum = num[i];
//     } else if (num[i] < secondSmallestNum) {
//       secondSmallestNum = num[i];
//     }
//   }
//   return secondSmallestNum;
// }

// console.log(secondSmallest([12, 12, 18, 7, 10]));

// function largestEven(num) {
//   let largestEvenNum = -Infinity;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0 && num[i] > largestEvenNum) {
//       largestEvenNum = num[i];
//     }
//   }
//   return largestEvenNum;
// }

// console.log(largestEven([-8, -2, -10]));

// function largestOdd(num) {
//   let largestOddNum = -Infinity;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0 && num[i] > largestOddNum) {
//       largestOddNum = num[i];
//     }
//   }
//   return largestOddNum;
// }

// console.log(largestOdd([8, 15, 2, 21, 10, 17]));

// function countEvenGreaterThan(num, target) {
//   let count = 0;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 === 0 && num[i] > target) {
//       count++;
//     }
//   }

//   return count;
// }

// console.log(countEvenGreaterThan([4, 7, 12, 15, 18, 20], 10));

// function oddGreaterThan(num, target) {
//   let oddGreaterThanNum = [];
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] % 2 !== 0 && num[i] > target) {
//       oddGreaterThanNum.push(num[i]);
//     }
//   }
//   return oddGreaterThanNum;
// }
// console.log(oddGreaterThan([4, 7, 12, 15, 18, 21], 10));

// function lastOccurrence(num, target) {
//   let lastIndex = -1;
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//       lastIndex = i;
//     }
//   }
//   return lastIndex;
// }

// console.log(lastOccurrence([5, 8, 2, 8, 10, 8], 8));

// function firstOccurrence(num, target) {
//   for (let i = 0; i < num.length; i++) {
//     if (num[i] === target) {
//       return i;
//     }
//   }
//   return -1;
// }

// console.log(firstOccurrence([5, 8, 2, 8, 10, 8], 8));

// function largestIndex(num) {
//   let largest = 0;
//   for (let i = 1; i < num.length; i++) {
//     if (num[i] > num[largest]) {
//       largest = i;
//     }
//   }
//   return largest;
// }

// console.log(largestIndex([12, 5, 18, 7, 10]));

function smallestIndex(num) {
  let smallestNumIndex = 0;
  for (let i = 0; i < num.length; i++) {
    if (num[i] < num[smallestNumIndex]) {
      smallestNumIndex = i;
    }
  }
  return smallestNumIndex;
}

console.log(smallestIndex([12, 5, 18, 7, 10]));
