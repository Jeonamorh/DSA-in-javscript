let arr = ["aaple", "bananna", "fruits"];

//* ADD and remove elements

arr.push("orange"); // add to the last
arr.pop(); // remove from the last

arr.shift(); // remove the first element
arr.unshift("orange"); // add the first element
console.log(arr);

//* Looping

for (let i = 0; i < i.length; i++) {
  console.log(arr[i]);
}
//while loop and do-while loops

//*Inbuilt Loop methods

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

number.map((item, index, array) => {
  // map return new array
  return item * 2;
});

number.filter((item, index, array) => {
  // filter return new array with items that satisfy the given condition
  return item > 3;
});

// reduce reduce array to one number
number.reduce((prev, item, index, array) => {
  //prev is the value o previous computation
  return prev + item;
}, 0); // 0 is the starting value of prev , if not mentioned then it will take first element of array as its value

// some is same like filter but it return boolean value
number.some((item, index, array) => {
  return item > 3;
});

number.every((item, index, array) => {
  // every item should satisfy the given condition
  return item > 3;
});

const newNumbers = number.find((item, index, array) => {
  // find the first item that satisfies the given condition
  return item > 3;
});

console.log(newNumbers);

//* Spread and Rest operators

const finalarr = [...arr, ...number]; // this spread operator

function sum(...numbers) {
  // this is rest operator , means this function can take as many arguments as it wants
  return numbers;
}

console.log(sum(23, 23, 213, 213, 1321));

// concat
nums.concat(nums2, arr);

// Slice
arr.slice(-2);

// Splice
arr.splice(1, 2, "orange"); // remove element from 1 to 2 and add orange to it in origianl array start from 1 and remove 2 elements

// Fill
const dummy = [2, 5, 1, 6];
dummy.fill(2, 2); //element,starting index   fill replace all elements with element mention in fill()

// Flat
const flatEx = [1, [2, 3], [[4, 5], 6]]; // => [1,2,3,4,5,6]

const flattenedArray = flatEx.flat(2); // 2 is used to at which depth to flatten array
// console.log(flattenedArray);

// reverse
nums.reverse();
// console.log(nums);

// sort
const unsorted = [5, 2, 10, 7, 3, 1];
unsorted.sort((a, b) => b - a);
console.log(unsorted);

// findIndex

const index = arr.findIndex((item) => item === 2); //return index of the item

//.include check wheather the element is present or not
