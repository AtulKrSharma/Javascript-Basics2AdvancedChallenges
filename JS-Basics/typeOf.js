const { type } = require('os');

let atul = 'dsfdff';

const myObject = { key1: 'atul', key2: 123 };

const pi = 123;

console.log(typeof atul);
console.log(typeof pi);
console.log(typeof myObject);

const boolValue = typeof myObject === 'object' ? true : false;
console.log(boolValue);

function isBool(dum) {
  return typeof myObject === 'object' ? true : false;
}

let finalValue = isBool();

function adderNumberBy5(value) {
  return typeof value === 'number' ? (value += 5) : value;
}

console.log(adderNumberBy5(50));
console.log(adderNumberBy5('atulKumar'));
