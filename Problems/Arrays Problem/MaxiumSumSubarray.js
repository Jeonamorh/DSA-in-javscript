//!Brute force
//? time complexity O(n^2)
// function MaxiumSumSubarray(nums) {
//   let finalsum = nums[0];
//   let startIndx = 0;
//   let endIndex = 0;

//   for (let i = 0; i < nums.length; i++) {
//     let sum = 0;

//     for (let j = i; j < nums.length; j++) {
//       sum = sum + nums[j];
//       if (sum > finalsum) {
//         finalsum = sum;
//         startIndx = i;
//         endIndex = j;
//       }
//     }
//   }

//   return {
//     sum: finalsum,
//     subAray: nums.slice(startIndx, endIndex + 1),
//   };
// }

//! Kadane's algorithm
//? time complexity O(n)

function MaxiumSumSubarray(nums) {
  let finalSum = nums[0];
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    if (sum > finalSum) {
      finalSum = sum;
    }
    if (sum < 0) {
      sum = 0;
    }
  }

  return finalSum;
}
console.log(MaxiumSumSubarray([5, 4, -1, 7, 8]));

//!3rd approach
//? time complexity O(n)

// var maxSubArray = function(nums) {
//     let max = -Infinity
//     let sum = 0
//     for (let i=0; i<nums.length; i++) {
//         sum += nums[i]
//         max = Math.max(max, sum) // Math.max() takes n value and compare whose value is greater
//         if (sum < 0) {
//             sum = 0
//         }
//     }
//     return max
// };
