const funcVal = (param1, param2) => param1 * param2;
const greetings = () => console.log(`Greetings from JS file`);

const numAdder = (num1, num2) => {
  console.log(`${num1} & ${num2}`);
  return num1 + num2;
};

console.log(funcVal(16, 10));
greetings();

console.log(numAdder(10,20));
