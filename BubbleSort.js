const bubbleSort = (arr) => {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; //swap the elements
      }
    }
  }

  return arr;
};

console.log(bubbleSort([27, 4, 3, 89]));
