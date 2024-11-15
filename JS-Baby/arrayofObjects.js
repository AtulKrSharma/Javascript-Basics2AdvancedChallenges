const arrayOfObj = [
  { name: 'Atul', age: 40 },
  { name: 'Monty', age: 20 },
  { name: 'Baks', age: 30 },
  'Mango'
];

for (const iterator of arrayOfObj) {
  if (typeof iterator === 'object')
    for (const key in iterator) {
      console.log(`Value of ${key} is ${iterator[key]} `);
    }
  else console.log(iterator);
}
