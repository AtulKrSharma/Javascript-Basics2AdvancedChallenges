const fruits = ["11", "22", "33", "44"];
let intialSum = 0;

console.log(fruits.map((element) => element * 2));

console.log(fruits.reduce((intialSum, element) => intialSum + element, 0));
// console.log(
//   fruits.map(function (element) {
//     return element * 2;
//   })
// );
console.log(fruits.filter((element) => element > 25));

const arr = ["apple", "mango", "pear", "grapes"];
console.log(arr.filter((element) => element.includes("ea")));
