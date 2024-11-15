const myArray = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10];

myArray.forEach((value, index) => console.log(`${index}-- ${value}`));

console.log(myArray.map((value) => value * 3));

console.log(
  myArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
);

console.log(myArray.filter((element) => element % 2 == 0));
