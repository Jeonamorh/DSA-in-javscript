//:IMP: Sliding Window DEQUEUE

//HEADING: Brute Force method
// const slidingMax = (nums, k) => {
//   let temp = [];
//   for (let i = 0; i < nums.length - k; i++) {
//     let max = nums[i];
//     for (let j = 1; j < k; j++) {
//       if (nums[j + i] >= max) {
//         max = nums[j + i];
//       }
//     }
//     temp.push(max);
//   }

//   return temp;
// };

//EXPLAIN: time =  O(n^2)  space = O(n)

//HEADING: BY Algorithm

const slidingMax = (nums, k) => {
  let result = [];
  let dequeue = []; // in dequeue we will save the index of the elements and have capacity equal to k(window size)
  for (let i = 0; i < nums.length; i++) {
    if (dequeue.length > 0 && dequeue[0] <= i - k) {
      //check if dequeue if filled
      dequeue.shift(); // remove the first element
    }
    while (dequeue.length > 0 && nums[dequeue[dequeue.length - 1]] < nums[i]) {
      dequeue.pop(); // keep on removing the element from last which smaller than the current
    }
    dequeue.push(i);

    if (i >= k - 1) {
      result.push(nums[dequeue[0]]);
    }
  }
  return result;
};
console.log(slidingMax([1, 3, -3, 5, 3, 6, 1], 3));

//EXPLAIN: time =  O(n)  space = O(n+3)
