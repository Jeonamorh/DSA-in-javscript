const truncate = (str, maxLength) => {
  if (str.length >= maxLength) {
    const newStr = str.substring(0, maxLength - 3) + "...";
    return newStr;
  }

  return str;
};

console.log(truncate("Subscribe to RoadSide ", 15));
console.log(
  truncate("According to IM Jeremy Silman in his classic book,  ", 25)
);
