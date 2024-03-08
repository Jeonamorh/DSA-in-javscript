//HEADING:using binary search

function kthpositiveNumber(arr, k) {
  let start = 0;
  let end = arr.length - 1;

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] - (mid + 1) < k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return start + k;
}

console.log(kthpositiveNumber([1, 2, 3, 4], 2));
