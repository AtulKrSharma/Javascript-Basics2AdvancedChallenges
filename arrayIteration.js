const numbers = [45, 4, 9, 16, 25];

numbers.push(168);
console.log(numbers);
numbers.pop();
console.log(numbers);

// numbers.forEach((iterator) => console.log(iterator * 2));

console.log(`~~~~`);

for (const number of numbers) {
  console.log(number);
}
console.log(`~~~~`);

// const name = 'AtulSharma';
// for (const iterator of name) console.log(iterator);

for (const iterator in numbers) console.log(numbers[iterator]);
