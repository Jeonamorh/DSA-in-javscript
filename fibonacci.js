const fibonacci = (n) => {
  let array = [0, 1];
  let a;
  for (let i = 2; i < n; i++) {
    a = array[i - 1] + array[i - 2];
    array.push(a);
  }
  return array;
};

console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(7));

// Big O  = O(n)
