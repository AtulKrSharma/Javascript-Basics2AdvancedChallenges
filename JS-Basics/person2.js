import { person } from './person.js';
import { randomValue, nameRandomizer } from './person1.js';

for (let key in person) {
  if (key == 'age') {
    console.log('this char is ' + key + '\n');
    console.log('this char is ' + person[key] + '\n');

    break;
  }
}

console.log(randomValue(2, 2));

let blankName = nameRandomizer('');
console.log(blankName);

let finalName = nameRandomizer('atul');
console.log(finalName);
