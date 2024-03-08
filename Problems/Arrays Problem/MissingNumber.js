// const missingNumber = (nums) => {
//   let n = nums.length;
//   if (n === 0) return 0;

//   nums.sort((a, b) => a - b);

//   for (let i = 0; i < n; i++) {
//     if (nums[i] != i) {
//       return i;
//     }
//   }

//   return i;
// };

//EXPLAIN: time O(n^2)

var missingNumber = function (nums) {
  const n = nums.length;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    // can use math.reduce(prev,item) to calculate total sum
    sum = sum + nums[i];
  }

  return (n * (n + 1)) / 2 - sum;
};

// EXPLAIN: time O(n)
console.log(missingNumber([3, 0, 1]));
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
