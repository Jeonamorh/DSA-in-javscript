const binarySearch = (nums, target) => {
  //IMP: In binary search the array must be sorted

  let start = 0;
  let end = nums.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      start = mid + 1;
    } else if (nums[mid] > target) {
      end = mid - 1;
    } else {
      return -1;
    }
  }
};

//EXPLAIN: O(logn) O(1)

console.log(binarySearch([1, 2, 3, 4, 5, 6], 5));
