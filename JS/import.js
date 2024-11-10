import MyClass, { satya } from './class.js';

const maz = new MyClass('mazda', 2018, 'CX5');

console.log(typeof maz);
console.log(maz.name);
console.log(maz.year);
console.log(maz.carAge());
maz.carTire();
console.log(satya);
