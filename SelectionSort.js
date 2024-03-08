const selectionSort = (arr) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let miniumIndex = i;
    for (let j = i; j < n; j++) {
      if (arr[j] < arr[miniumIndex]) {
        miniumIndex = j;
      }
    }
    if (miniumIndex !== arr[i]) {
      [arr[i], arr[miniumIndex]] = [arr[miniumIndex], arr[i]]; // swap the elements
    }
  }

  return arr;
};

console.log(selectionSort([27, 3, 18, 4]));
