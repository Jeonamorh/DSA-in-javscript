// const linearSearch = (nums, target) => {
//   return nums.find((n) => n === target) || -1;
// };

// console.log(linearSearch([1, 1, 2, 3, 4, 5, 6, 6]), 2);

//EXPLAIN: O(n) O(1)

const linearSearch = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    }
  }
  return -1;
};

//HEADING:Global linear search
