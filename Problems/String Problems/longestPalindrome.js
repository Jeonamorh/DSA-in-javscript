// const longestPalindrome = (s) => {
//   let obj = {};
//   let count = 0;
//   let hasOddValue = false;

//   for (let i = 0; i < s.length; i++) {
//     if (obj[s[i]]) obj[s[i]]++;
//     else obj[s[i]] = 1;
//   }
//   for (const key in obj) {
//     if (obj[key] % 2 === 0) count = count + obj[key];
//     else {
//       count = count + obj[key] - 1;
//       hasOddValue = true;
//     }
//   }

//   if (hasOddValue) {
//     count = count + 1;
//   }
//   return count;
// };

const longestPalindrome = (s) => {
  let mapN = [];
  let l = 0; //length

  for (let i = 0; i < s.length; i++) {
    mapN[s.charCodeAt(i)] = (mapN[s.charCodeAt(i)] || 0) + 1; //charCode work as a unique index but it takes alot space
    if (mapN[s.charCodeAt(i)] % 2 == 0) l = l + 2;
  }
  console.log(mapN);
  return s.length > l ? l + 1 : l;
};

console.log(longestPalindrome("aaaabbbbccccddda"));
