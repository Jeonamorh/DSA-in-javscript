//* Incomplete
// var longestCommonPrefix = function (strs) {
//   let key = strs[0];
//   let result = "";
//   for (let i = 0; i < strs.length; i++) {
//     let prefix = strs[0][i];

//     for (let j = 1; j < strs.length; j++) {
//       if (!strs[j].includes(prefix)) {
//         break;
//       }

//       result += prefix;
//     }
//   }
//   return result;
// };

//* Correct answers
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  // Find the shortest string in the array
  let shortest = strs.reduce(
    (acc, curr) => (curr.length < acc.length ? curr : acc),
    strs[0]
  );

  // Iterate through each character of the shortest string
  for (let i = 0; i < shortest.length; i++) {
    // Check if the character at the current index is common to all strings
    for (let str of strs) {
      if (str[i] !== shortest[i]) {
        return shortest.substring(0, i);
      }
    }
  }

  return shortest;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
