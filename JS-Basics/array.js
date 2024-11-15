const fruits = ['apple', 'mango', 'pear', 'grapes'];

//for loop if index is needed

for (let i = 0; i <= fruits.length - 1; i++) {
  console.log(i);
  console.log(fruits[i]);
}

//for of if array values are only needed
for (let fruit of fruits) {
  console.log(fruit);
}
