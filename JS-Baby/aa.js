function sum(...args) {
  let sum = 0;

  for (let element of args) {
    sum = sum + element;
  }
  return sum;
}

const summer = (...args) => args.reduce((accu, ele) => accu + ele, 0);

console.log(sum(4, 9, 16, 25, 29, 100, 66, 77));
console.log(summer(4, 9, 16, 25, 29, 100, 66, 77));

//This example multiplies each array value by 2:

const multi = (arr1) => {
  arr1.forEach((ele, index) => (arr1[index] = ele * 2));
  return arr1;
};

console.log(multi([10, 20, 40]));

const multiple = (arr1) => arr1.map((ele) => ele * 2);

console.log(multiple([100, 200, 400]));

console.log(`^^^^`);

const numbers = [1, 2, 3];
numbers.forEach((num) => {
  console.log(num * 2); // Just processing, not modifying
});
console.log(numbers); // Output: [1, 2, 3]
