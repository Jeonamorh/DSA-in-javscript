//* MY Approach

// var reverseStr = function (s, k) {
//   const newStr = s.split("");
//   let result = "";
//   for (let i = 0; i < newStr.length; i++) {
//     if (i % (2 * k) == 0) {
//       result = reverse(newStr, i, i + k);
//     }
//   }
//   return result.join("");
// };

// function reverse(arr, start, end) {
//   for (let i = start; i < end; i++) {
//     const temp = arr[i];
//     arr[i] = arr[end - 1];
//     arr[end - 1] = temp;
//     end--;
//   }

//   return arr;
// }

// console.log(reverseStr("abcdefg", 2));
// console.log(reverseStr("abcd", 2));
console.log(reverseStr("abcdef", 3));

//EXPLAIN: time O(n)

//* little better code from chatgpt

var reverseStr = function (s, k) {
  const newStr = s.split("");
  let result = "";
  for (let i = 0; i < newStr.length; i += 2 * k) {
    result += reverse(newStr.slice(i, i + k));
    result += newStr.slice(i + k, i + 2 * k).join("");
  }
  return result;
};

function reverse(arr) {
  for (let i = 0; i < Math.floor(arr.length / 2); i++) {
    const temp = arr[i];
    arr[i] = arr[arr.length - 1 - i];
    arr[arr.length - 1 - i] = temp;
  }
  return arr.join("");
}
