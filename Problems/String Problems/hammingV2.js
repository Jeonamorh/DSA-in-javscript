const hamming = (x, y) => {
  //* convert number to binary
  x = x.toString(2);
  y = y.toString(2);

  if (x.length < y.length) {
    while (x.length != y.length) {
      x = "0" + x;
    }
  } else if (x.length > y.length) {
    while (x.length != y.length) {
      y = "0" + y;
    }
  }

  let count = 0;
  for (let i = 0; i < y.length; i++) {
    if (x[i] !== y[i]) count++;
  }

  return count;
};

console.log(hamming(1, 10000));
