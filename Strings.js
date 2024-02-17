const name = "anmol";
const company = "lpu";
const str = "anmol apple is an animal eating animal";
//* ================Function can also be called through================

// console.log`the name of the employee is${name} and company is ${company}`;

function employee(string, name, company) {
  console.log(string, name, company);
}

employee`the name of the employee is${name} and company is ${company}`;

//*================= Accessing the String==============

console.log(name[3]);
console.log(name.charAt(3));

//* =================looping=========================
// can be done with simple for loop

//*============= Modifying strings==================

name[3] = "o"; //! can't modify because strings are immutable in javascript
// console.log(name);

console.log(str.replace("a", "s")); // replace doesnot modify the string but return new string. Only change first occuring character
console.log(str.replaceAll("a", "s")); // replace all characters mentioned in string

//*=================== concatination=================

const newStr = str.concat(" hello word"); //.concat

console.log(newStr);

//*================trim=============
// remove all whitespace

const newStr1 = "               hello   word               ";

console.log(newStr1.trim());

//*================Searching==============

console.log(str.indexOf("a"));
console.log(str.indexOf("animal"));

console.log(str.lastIndexOf("a"));

console.log(str.startsWith("a"));
console.log(str.endsWith("a"));

//*============Extracting Substring============

console.log(str.substring(13, 20));
console.log(str.slice(13, -1)); // slice is similar to .subString() but slice is more powerfull as it can aslo refer the char from end of array

//*================Converting====================
const obj = {
  name: "anmol",
};
console.log(String(1));
console.log(String(true));
console.log(String(obj)); // cant convet obj and arrray into string

// to convert obj into string
const objStr = JSON.stringify(obj);
console.log(objStr);
console.log(JSON.parse(objStr)); // convert string obj into javascript obj

//*=============ASCII value============

console.log(str.charCodeAt(0));
console.log(String.fromCharCode(65));

//*================String Comparison==========

const str2 = "apple";
const str3 = "banana";

console.log(str2.localeCompare(str3)); // compare two strings

console.log(str.includes(str2)); // check is str2  present in str ?

//*=================Spliting===========

console.log(str.split("a")); // a will not included in the array

const arr = ["apples", "bananna", "strawbeery"];

console.log(arr.join(" and ")); // join the elements in array into a string , and is used as a convention to join the elements
