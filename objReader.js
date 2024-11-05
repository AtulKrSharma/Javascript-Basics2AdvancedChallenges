const myObj = {
  name: 'John',
  age: 30,
  cars: [
    { name: 'Ford', models: ['Fiesta', 'Focus', 'Mustang'] },
    { name: 'BMW', models: ['320', 'X3', 'X5'] },
    { name: 'Fiat', models: ['500', 'Panda'] },
  ],
};

for (const iterator in myObj) {
  console.log(`value of key ${iterator} is ${myObj[iterator]}`);
}
