class DummyClass {
  constructor(name, year) {
    this._name = name;
    this._year = year;
  }

  dummyName(numbers) {
    let numbersIncrement = numbers + 1;
    return numbersIncrement;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    if (name !== null && name !== undefined) {
      this.name = name;
    } else {
      console.log("name is blank");
    }
  }
}

let dummyObj = new DummyClass("Atul", 1983);
console.log(dummyObj);

let values = dummyObj.dummyName(44);
console.log(values);

console.log(dummyObj.setName());
