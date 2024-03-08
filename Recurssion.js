function goLunch(person) {
  if (person === 5) return true;
  console.log(person);
  return goLunch(person + 1);
}

// console.log("outcome", goLunch(1));

//* Loop vs Recursion

function multiplier(arr) {
  if (arr.length <= 0) return 1;
  return arr[arr.length - 1] * multiplier(arr.slice(0, arr.length - 1));
}

console.log("outcome", multiplier([1, 2, 3, 4]));
