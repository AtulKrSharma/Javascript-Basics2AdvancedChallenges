const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const adder = (...param) => {
  let sum = 0;
  for (const iterator of param) {
    sum = sum + iterator;
  }
  return sum;
};

console.log(adder(...numArray));
