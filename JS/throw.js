//throw.js

try {
  function add(x, y) {
    // if (typeof x !== 'number') {
    //   throw 'The first argument must be a number';
    // }
    // if (typeof y !== 'number') {
    //   throw 'The second argument must be a number';
    // }
    return x + y;
  }
} catch (e) {
  console.log(e.name);
}

const result = add(10, 'a');
console.log(result);
