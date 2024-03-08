// const removeDulicate = (arr) => {
//   for (let i = 0; i < arr.length - 1; i++) {
//     if (arr[i] === arr[i + 1]) {
//       arr.splice(i, 1);
//       i--;
//     }
//   }

//   return arr;
// };

//* Without javascript built in methods

const removeDuplicate = (arr) => {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] != arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return arr;
};
console.log(removeDuplicate([1, 1, 2]));
