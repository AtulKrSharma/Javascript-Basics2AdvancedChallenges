class Student {
  // Private fields (using ES2022 syntax)
  #name;
  #age;
  #grades;

  constructor(name, age, grades) {
    this.#name = name;
    this.#age = age;
    this.#grades = grades;
  }

  // Getter for name
  get name() {
    return this.#name;
  }

  // Setter for name
  set name(value) {
    if (typeof value === "string" && value.length > 0) {
      this.#name = value;
    } else {
      console.log("Invalid name");
    }
  }

  // Getter for age
  get age() {
    return this.#age;
  }

  // Setter for age
  set age(value) {
    if (Number.isInteger(value) && value > 0) {
      this.#age = value;
    } else {
      console.log("Please enter a valid age");
    }
  }

  // Getter for grades
  get grades() {
    return this.#grades;
  }

  // Setter for grades
  set grades(value) {
    if (
      Array.isArray(value) &&
      value.every((grade) => typeof grade === "number")
    ) {
      this.#grades = value;
    } else {
      console.log("Please enter a valid array of grades");
    }
  }

  // Method to calculate the student's average grade
  calculateAverageGrade() {
    const total = this.#grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.#grades.length;
  }
}

// Example usage
const student = new Student("Jane Doe", 22, [95, 80, 87, 93]);

console.log(student.name); // Jane Doe
student.name = "John Smith";
console.log(student.name); // John Smith

console.log(student.age); // 22
student.age = 23;
console.log(student.age); // 23

console.log(student.grades); // [95, 80, 87, 93]
student.grades = [100, 90, 85, 95];
console.log(student.grades); // [100, 90, 85, 95]

console.log(student.calculateAverageGrade()); // 92.5
