function avgFinder(a, b) {
  return (a + b) / 2;
}

let avg = avgFinder;

function add(a, b) {
  console.log(a);
  console.log(b);

  return avg(a + b);
}

let adder = add;

let sumResult = adder(44, 44);
console.log(sumResult);
