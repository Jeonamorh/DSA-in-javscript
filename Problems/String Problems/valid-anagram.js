// 1st approach

// const anagram = (x, y) => {
//   if (x.length != y.length) return false;
//   //* sort() sort the array in ascending order
//   x = x.split("").sort().join("");
//   y = y.split("").sort().join("");

//   if (x !== y) return false;

//   return true;
// };

// console.log(anagram("anagram", "nagarm"));

// 2nd approach (optimized)

const anagram = (s, t) => {
  let obj1 = {};
  let obj2 = {};
  if (s.length != t.length) return false;
  for (let i = 0; i < s.length; i++) {
    obj1[s[i]] = (obj1[s[i]] || 0) + 1;
    obj2[t[i]] = (obj2[t[i]] || 0) + 1;
  }

  console.log(obj1, obj2);

  for (const key in obj1) {
    if (obj1[key] !== obj2[key]) return false;
  }

  return true;
};

console.log(anagram("anagram", "naagarm"));
console.log(anagram("car", "rat"));
