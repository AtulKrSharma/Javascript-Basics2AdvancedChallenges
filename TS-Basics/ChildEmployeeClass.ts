import Person from './ParentPersonClass';
class Employee extends Person {
  private readonly jobTitle: string;
  constructor(firstName: string, lastName: string, jobTitle: string) {
    super(firstName, lastName);
    this.jobTitle = jobTitle;
  }
}

const emp1 = new Employee('Monty', 'Carlo', 'Sales');
console.log(emp1);
