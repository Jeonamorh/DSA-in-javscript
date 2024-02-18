//! First approach  Big o O(nlogn)

// const secondLargestNumber = (arr) => {
//   if (arr.length === 1) return arr[0];
//   arr = arr.sort((a, b) => a - b);
//   const largestNumber = arr[arr.length - 1];

//   const newarr = arr.filter((item) => {
//     return item < largestNumber;
//   });

//   return newarr[newarr.length - 1];
// };

// console.log(
//   secondLargestNumber([
//     12, 7, 4, 2, 2, 4, 5, 4, 45, 5, 31, 10, 123, 223, 222, 2, 2, 212, 31,
//   ])
// );

//* Second approach (optimised) big o O(n)

const secondLargestNumber = (arr) => {
  let largest = Number.NEGATIVE_INFINITY;
  let secondLargest = Number.NEGATIVE_INFINITY;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largest) {
      secondLargest = largest;
      largest = arr[i];
    } else if (arr[i] > secondLargest && arr[i] != largest) {
      secondLargest = arr[i];
    }
  }

  return secondLargest;
};

console.log(
  secondLargestNumber([
    12, 7, 4, 2, 2, 4, 5, 4, 45, 5, 31, 10, 123, 223, 222, 2, 2, 212, 31,
  ])
);
