const obj = [
  { name: "anmol", age: 32 },
  { name: "anmol", age: 52 },
  { name: "anmol", age: 12 },
  { name: "anmol", age: 12 },
  { name: "anmol", age: 13 },
  { name: "anmol", age: 22 },
];

console.log(
  obj.sort((a, b) => {
    return a.age - b.age;
  })
);
