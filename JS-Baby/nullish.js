//The Nullish Coalescing Operator (??)
let age;
const ageVar = age ?? 12;
console.log(ageVar);
//The Optional Chaining Operator (?.)

const car = {type:"Fiat", model:"500", color:"white"};
let nameCar = car?.name;
console.log(nameCar)


const nullValue = null;
const emptyText = ""; // falsy
const someNumber = 42;
let undefinedValue;

const valA = nullValue ?? "default for A";
const valB = emptyText ?? "default for B";
const valC = someNumber ?? 0;
const valD= undefinedValue?? 143


console.log(valA); // "default for A"
console.log(valB); // "" (as the empty string is not null or undefined)
console.log(valC); // 42
console.log(valD);//143