//! My approch

// const rotateArray = (nums, k) => {
//   let newarr = [];
//   for (let i = k + 1; i < nums.length; i++) {
//     newarr[i] = nums[i];
//   }

//   return newarr.slice(k + 1).concat(nums.slice(0, k + 1));
// };

// 2nd approach

// const rotateArray = (nums, k) => {
//   let size = nums.length;
//   if (k > size) {
//     k = k % size;
//   }

//   const rotatedarr = nums.splice(size - k, size);

//   nums.unshift(...rotatedarr);
//   return nums;
// };

// time complexity O(n)

// 3rd approach

const rotateArray = (nums, k) => {
  let size = nums.length;
  if (k > size) {
    k = k % size;
  }
  reverse(nums, 0, size - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, size - 1);
};

function reverse(nums, left, right) {
  while (left < right) {
    let temp = nums[left];
    nums[left] = nums[right];
    nums[right] = temp;
    left++;
    right--;
  }
}
console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));

//                   reverse               reverse       reverse
//[1,2,3,4,5,6,7] =>[7,6,5,4,3,2,1] =>[5,6,7,4,3,2,1] =>[5,6,7,1,2,3,4]
