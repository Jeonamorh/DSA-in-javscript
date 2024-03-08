const mergeSort = (intervals) => {
  let startIndex = 0;
  let endIndex = 1;

  intervals.sort((a, b) => a[startIndex] - b[startIndex]);

  let mergeStart = intervals[0][startIndex];
  let mergeEnd = intervals[0][endIndex];

  const mergedArray = [];

  for (let i = 1; i < intervals.length; i++) {
    let subsequentInterval = intervals[i];
    if (mergeEnd >= subsequentInterval[startIndex]) {
      mergeEnd = Math.max(mergeEnd, subsequentInterval[endIndex]);
    } else {
      mergedArray.push([mergeStart, mergeEnd]);
      mergeStart = subsequentInterval[startIndex];
      mergeEnd = subsequentInterval[endIndex];
    }
  }

  mergedArray.push([mergeStart, mergeEnd]);
  return mergedArray;
};
