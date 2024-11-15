const centreName = 'Atul Ku mar Sha rma';
let spaceCount = 0;

for (const iterator of centreName) {
  console.log(iterator);
  if (iterator == ' ') {
    spaceCount++;
    continue;
  }
}
console.log(`count of space in the string is ${spaceCount}`);
