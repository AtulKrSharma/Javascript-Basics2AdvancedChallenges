const cars = ['Subaru', 'Mazda', 'Tesla', 'Camry'];

console.log(typeof cars);
console.log(cars instanceof Array);
console.log(Array.isArray(cars));

//for loop
for (let item = 0; item < cars.length; item++) {
  console.log(item);
  console.log(cars[item]);
}

//for of loop
for (const item of cars) console.log(`I love ${item}`);

// accessing
console.log(cars[0]);
console.log(cars[cars.length - 1]);

//foreach loop
cars.forEach((item) => console.log(`I love foreach ${item}`));
