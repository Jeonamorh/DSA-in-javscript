var summaryRanges = function (nums) {
  let result = [];
  let start = 0;
  let end = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] === nums[i] + 1) {
      end = i + 1;
    } else {
      result.push(
        `${nums[start]}${nums[start] == nums[end] ? "" : `->${nums[end]}`}`
      );

      start = i + 1;
      end = i + 1;
    }
  }
  return result;
};
console.log(summaryRanges([0, 2, 3, 4, 6, 8, 9]));

// let result = [];
// const recurrence = function (nums, startIndex = 0, endIndex = 0) {
//   let start = nums[startIndex];
//   let end = nums[endIndex];

//   for (let i = startIndex; i < nums.length; i++) {
//     if (nums[i + 1] === nums[i] + 1) {
//       end = nums[i + 1];
//     } else {
//       result.push({ start, end });
//       recurrence(nums, i + 1, i + 1);
//       break;
//     }
//   }

//   return result;
// };
