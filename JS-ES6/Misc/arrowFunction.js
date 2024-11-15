const dummy = () => {
  console.log("hello");
};

dummy();

let arrowFunc = (num1, num2) => num1 * num2;

console.log(arrowFunc(12, 12));

const testArray = [6, 5, 4, 3, 2, 1];
console.log(
  testArray.forEach((value, index) => console.log(`${index}--${value}`))
);
