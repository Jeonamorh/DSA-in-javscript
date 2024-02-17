const checkPalindrome = (string) => {
  //* this solution is both for number and strings
  //   let str = String(string);
  //   const reverseStr = str.split("").reverse().join("");

  //   if (str === reverseStr) return true;
  //   else return false;
  //* only number short hand
  return string === +string.toString().split("").reverse().join(""); // + will convert string into number
};

console.log(checkPalindrome(121));
console.log(checkPalindrome(322));
console.log(checkPalindrome("racecar"));
console.log(checkPalindrome("hello"));
