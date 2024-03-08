// 1st approach
const backspace = (s, t) => {
  let stack1 = [];
  let stack2 = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "#") {
      stack1.pop();
    } else {
      stack1.push(s[i]);
    }
  }
  for (let i = 0; i < t.length; i++) {
    if (t[i] === "#") {
      stack2.pop();
    } else {
      stack2.push(t[i]);
    }
  }
  s = stack1.join("");
  t = stack2.join("");

  return s === t;
};

//2nd approach (more clean code)
var backspaceCompare = function (s, t) {
  let helper = (string) => {
    let stack = [];
    for (let letter of string) {
      if (letter === "#") {
        stack.pop();
      } else {
        stack.push(letter);
      }
    }
    return stack.join("");
  };

  return helper(s) == helper(t);
};

console.log(backspace("y#fo##f", "y#f#o##f"));
