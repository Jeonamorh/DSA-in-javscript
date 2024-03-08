//HEADING:Difficult backtracking question

function generatePalindromes(S) {
  const result = [];
  backtrack("", S.split("").sort().join(""), result);
  return result;
}

function backtrack(prefix, remaining, result) {
  if (remaining.length === 0) {
    if (isPalindrome(prefix)) {
      result.push(prefix);
    }
    return;
  }

  for (let i = 0; i < remaining.length; i++) {
    if (i > 0 && remaining[i] === remaining[i - 1]) {
      continue;
    }
    backtrack(
      prefix + remaining[i],
      remaining.slice(0, i) + remaining.slice(i + 1),
      result
    );
  }
}

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

// Test the function
const S = "abbab";
console.log(generatePalindromes(S)); // Output: ["abbba", "babab"]
