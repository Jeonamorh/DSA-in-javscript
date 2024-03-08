// function maxiumCountnumber(nums) {
//   let start = 0;
//   let end = nums.length - 1;

//   while (start < end) {
//     let mid = Math.floor((start + end) / 2);

//     if (nums[mid] < 0) {
//       start = mid + 1;
//     } else end = mid - 1;
//   }
//   return Math.max(start, nums.length - start);
// }

// console.log(maxiumCountnumber([-2, -1, -1, 1, 2, 3]));

//EXPLAIN: this solution is correct until 0 comes

//
function maximumCount(nums) {
  return Math.max(upperBound(nums), lowerBound(nums));
}

// [-2,-1,-1,1,2,3]
// low = 2 , high = 2
// mid = 3 => nums[3] = 1
function upperBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.ceil((low + high) / 2); //math.ceil used to find the upper limit
    if (nums[mid] < 0) low = mid;
    else high = mid - 1;
  }

  return nums[0] >= 0 ? 0 : low + 1;
}

function lowerBound(nums) {
  let low = 0,
    high = nums.length - 1;

  while (low < high) {
    let mid = Math.floor((low + high) / 2); // math.floor used to find the ulower limit
    if (nums[mid] > 0) high = mid;
    else low = mid + 1;
  }

  return nums[nums.length - 1] <= 0 ? 0 : nums.length - low;
}

console.log(maximumCount([-3, -2, -1, 0, 0, 1, 2]));
