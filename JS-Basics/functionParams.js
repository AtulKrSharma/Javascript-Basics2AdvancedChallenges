//You can use the same code with different arguments, to produce different results.

function adderNumberBy5(value) {
  console.log('single param');
  return typeof value === 'number' ? (value += 5) : value;
}

function adderNumberBy5(value1, value2) {
  console.log('double param');
  return typeof value1 === 'number' && typeof value2 === 'number'
    ? value1 + value2 + 5
    : 'either or both are not numbers';
}

console.log(adderNumberBy5(10, 10));
console.log(adderNumberBy5(10, 'atul'));

console.log('^^^^');
console.log(adderNumberBy5(10));
console.log(adderNumberBy5('hey'));
