const mergeSort = (arr) => {
  // O(logn)
  // base case

  if (arr.length <= 1) return arr;

  let mid = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, mid));
  let right = mergeSort(arr.slice(mid));

  return merge(left, right);
};

function merge(left, right) {
  let sortedArr = []; //O(n)

  while (left.length && right.length) {
    if (left[0] > right[0]) {
      sortedArr.push(right.shift());
    } else {
      sortedArr.push(left.shift());
    }
  }

  return [...sortedArr, ...left, ...right];
}

console.log(mergeSort([3, 23, 54, 1, 2, 3, 4, 78]));

//EXPLAIN: time = O(nlongn) space complexity = O(n)
