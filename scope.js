// //we have 3 types of scope in js
// 1. global scope

const PI = 10;
let name = 'Vaami';

const myVal = (number) => {
  //console.log(number);
  let name = 'Atul';
  console.log(name);

  return number * PI;
};

// 2. function scope
// 3. block scope

console.log(PI);
console.log(myVal(20));
console.log(name);
