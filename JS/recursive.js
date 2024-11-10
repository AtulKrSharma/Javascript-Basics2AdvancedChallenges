const factorial = (param) => {
  if (param == 0 || param == 1) return 1;
  else
    while ((param = 1)) {
      param = param * param - 1;
      param--;
    }
};

console.log(factorial(3));
