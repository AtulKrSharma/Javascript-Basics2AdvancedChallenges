export default class MyClass {
  constructor(name, year, model) {
    this.name = name;
    this.year = year;
    this.model = model;
    console.log(`I'm in constructor`);
  }

  carAge = () => new Date().getFullYear() - this.year;
  carTire() {
    console.log(this.model);
    switch (this.model) {
      case 'CX5':
        console.log('yay!');
        break;
      case 'FG4':
        console.log('Fay!');

        break;
      default:
        console.log('Nay!');
    }
  }
}

export const satya = 'Vachan';

// const maz = new MyClass('mazda', 2018, 'CX5');

// console.log(typeof maz);
// console.log(maz.name);
// console.log(maz.year);
// console.log(maz.carAge());
// maz.carTire();
