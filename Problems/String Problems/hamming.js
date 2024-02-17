const hammingLength = (x, y) => {
  if (x.length !== y.length) throw new Error("String must be of same length");
  let count = 0;
  for (let i = 0; i < x.length; i++) {
    if (x[i] !== y[i]) count++;
  }

  return count;
};

console.log(hammingLength("hello", "hwllr"));
console.log(
  hammingLength(
    "I am here presenting you my string class",
    "I um were presesting you yy string claasc"
  )
);
