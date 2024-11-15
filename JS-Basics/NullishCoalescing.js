///value1?? value2
//it will return value2 if value1 is null or undefined

const stringVal1 = null;
const stringVal2 = undefined;
const stringVal3 = "atul";
console.log(stringVal1 ?? 1);
console.log(stringVal2 ?? 1);
console.log(stringVal3 ?? 1);

let empName = null ?? "Raja";
let deptName = undefined ?? "Contractor";

console.log(empName);
console.log(deptName);

let demo;

console.log(demo ?? 11);
