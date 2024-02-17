const numberOfChangingKeys = (s) => {
  if (s.length === 1) {
    return 0;
  }
  s = s.toLowerCase();
  let count = 0;
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] !== s[i + 1]) {
      count++;
    }
  }
  return count;
};

// console.log(numberOfChangingKeys("aaAbbbBcccCCC"));
console.log(numberOfChangingKeys("aAAaaaAA"));

console.log("a" === "a");
