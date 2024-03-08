// function findDisappearedNumbers(nums) {
//   const n = nums.length;
//   const set = new Set(nums); //IMP: set to store unique numbers from the given array.
//   const result = [];

//   for (let i = 1; i <= n; i++) {
//     if (!set.has(i)) {
//       result.push(i);
//     }
//   }

//   return result;
// }

function findDisappearedNumbers(nums) {
  const n = nums.length;
  const obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[nums[i]]) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  const result = [];

  for (let i = 1; i <= n; i++) {
    if (!obj[i]) {
      result.push(i);
    }
  }

  return result;
}
// Test the function
const nums = [4, 3, 2, 7, 8, 2, 3, 1];
console.log(findDisappearedNumbers(nums));
