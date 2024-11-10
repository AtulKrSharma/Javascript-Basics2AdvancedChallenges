class MyClass {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `${this.name} has age ${this.age}`;
  }
}

const primeClass: MyClass = new MyClass('Atul', 40);
console.log(primeClass.name);
console.log(primeClass.age);
console.log(primeClass.getDetails());
