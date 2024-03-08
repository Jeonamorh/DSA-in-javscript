//* using stacks

var reverseWords = function (s) {
  const splits = s.split(" ");
  const stack = [];
  for (const i of splits) {
    stack.push(i);
  }
  let finals = "";
  while (stack.length) {
    const current = stack.pop();

    if (current) {
      finals += " " + current;
    }
  }
  return finals.trim();
};

console.log(reverseWords("a good   example"));

// *optimized

return s
  .trim()
  .split(" ")
  .reverse()
  .filter((element) => element.length != 0)
  .join(" ");
