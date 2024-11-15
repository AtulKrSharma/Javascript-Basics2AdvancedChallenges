import js from './j.json' with {type: "json"};

console.log(js);

const jsObject = {
  name: 'Alice',
  age: 30,
  dept: 'IT',

  greet: (personName) => console.log(`hi, ${personName}`),
  greetLocal: function () {
    console.log(`hi, ${this.name}`);
  },
  adder(param){return param*2};
};

jsObject.greet('Danny');
console.log(jsObject.name);
jsObject.greetLocal();

for (const iterator in jsObject) {
  console.log(`${iterator}: ${jsObject[iterator]}`);
}
console.log(`~~~~~~~~~~~`);

console.log(jsObject);
console.log(`~~~~~~~~~~~`);
console.log(JSON.stringify(jsObject));
