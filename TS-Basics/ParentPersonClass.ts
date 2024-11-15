class Person {
  private readonly firstName: string;
  private readonly lastName: string;

  constructor(firstName: string, lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }
  getFullName(): string {
    return `${this.firstName} ${this.lastName}`;
  }
  describe(): string {
    return `This is ${this.firstName} ${this.lastName}.`;
  }
}

export default Person;
