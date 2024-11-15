const myArray = [1, 3, 4, 5, 6, 8];

const [one, two, three, ...rest] = myArray;

console.log(one);
console.log(two);
console.log(three);
console.log(rest);
console.log('~~~');
console.log(...myArray);
console.log('~~~');
const result = Math.max(...myArray);
console.log(`max value is : ${result}`);
