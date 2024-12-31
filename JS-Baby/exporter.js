export class DemoClass {
  constructor(name, age, location) {
    this.name = name;
    this.age = age;
    this.location = location;
  }

  dumber = (num1, num2) => num1 - num2;

  printer = function () {
    console.log(`${this.name} is using printer`);
  };
}

export { DemoClass };
