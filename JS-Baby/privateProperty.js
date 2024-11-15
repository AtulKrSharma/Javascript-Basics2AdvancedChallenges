class YourClass {
  #make;
  #model;

  constructor(make, model) {
    this.#make = make;
    this.#model = model;
  }
  isCar() {
    console.log('helloz, you are here for CAR');
  }
}

class MyClass extends YourClass {
  #isUsed;
  #year;

  get year() {
    return this.#year;
  }

  set year(year) {
    if (typeof year == 'number') this.#year = year;
    else console.log('invalid year data type');
  }

  constructor(make, model, year, isUsed) {
    super(make, model);
    this.#isUsed = isUsed;
    this.year = year;
  }

  isUsedorNew() {
    if (!this.#isUsed && this.#year > 2000) {
      console.log('hey, it is new');
    } else {
      console.log('heylo, it is used');
    }
  }

  isCar() {
    console.log('helloz, you are here for CAR');
  }

  carDetails() {
    console.log(`${this.make}-${this.model}-${this.year}-${this.isUsed}`);
  }
}

const service = new MyClass('Mazda', 'GS', 2018, true);
console.log(service.carDetails());
console.log(`~~~`);
console.log(service.isCar());
