const iterArray = [1, 2, 3, 4, 5, 6, 7];

//for of
for (const iterator of iterArray) {
  console.log(iterator);
}

console.log(`#############`);

//foreach
iterArray.forEach((iterator) => {
  console.log(iterator);
});

console.log(`#############`);
//forin
for (let iterator in iterArray) {
  console.log(`${iterator}: ${iterArray[iterator]}`);
}