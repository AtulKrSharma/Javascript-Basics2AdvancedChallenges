const factorial = (param) => {
  let result = 1; // Start with 1 since we are multiplying

  if (param === 0 || param === 1) {
    console.log('I am in if');
    return 1;
  } else {
    console.log('I am in else');
    while (param > 1) {
      // Loop until param is 1
      console.log(`value of param is ${param}`);
      result *= param; // Multiply result by the current value of param
      param--; // Decrement param
    }
    return result;
  }
};

// console.log(factorial(0)); // Output: 1
// console.log(factorial(1)); // Output: 1
console.log(factorial(4)); // Output: 6 (3 * 2 * 1)
