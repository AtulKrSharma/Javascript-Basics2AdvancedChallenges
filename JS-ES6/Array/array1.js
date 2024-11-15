const fruits = ["apple", "mango", "pear", "grapes"];

function myFunc(item) {
  console.log(`${item} ${item}`);
}

//for

for (let index = 0; index < fruits.length; index++) {
  console.log(`index is ${index} and value is ${fruits[index]}`);
}

//forOf
for (const fruit of fruits) {
  console.log(fruit);
}

//forEach
// fruits.forEach((index, element) => {
//   console.log(`${element}--${index}`);
// });
fruits.forEach(function (index, element) {
  return console.log(`${element}--${index}`);
});

console.log("%%%%");

fruits.forEach(myFunc);
