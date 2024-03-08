const quickSort = (arr) => {
  if (arr.length <= 1) return arr;
  let pivot = arr[0];
  let right = [];
  let left = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
};

console.log(quickSort([1, 6, 2, 4, 12, 3, 67, 34]));

// Time Complexity -
// Average Case - O(nlog n)
// Best Case - O(nlog n)
// Worst Case - O(n^2)

// Space Complexity -
// Average Case - O(log n)
// Worst Case - O(n)

// without using left and right arrays
function pivot(arr, start = 0, end = arr.length - 1) {
  function swap(arr, i, j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      swapIdx++;
      swap(arr, swapIdx, i);
    }
  }
  swap(arr, start, swapIdx);

  return swapIdx;
}

function quickSort(arr, start = 0, end = arr.length - 1) {
  if (start < end) {
    let pivotPoint = pivot(arr, start, end);

    quickSort(arr, start, pivotPoint - 1);
    quickSort(arr, pivotPoint + 1, end);
  }
  return arr;
}
