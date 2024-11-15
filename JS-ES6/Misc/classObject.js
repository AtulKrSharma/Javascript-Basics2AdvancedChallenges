const student = {
  name: "Jane Doe",
  age: 22,
  grades: [95, 80, 87, 93],

  // Method to get the student's name
  get Name() {
    return this.name;
  },

  // Method to set the student's name
  set Name(name) {
    this.name = name;
  },

  // Method to get the student's age
  get Age() {
    return this.age;
  },

  // Method to set the student's age
  set Age(age) {
    this.age = age;
  },

  // Method to get the student's grades
  get Grades() {
    return this.grades;
  },

  // Method to set the student's grades
  set Grades(grades) {
    this.grades = grades;
  },

  // Method to calculate the student's average grade
  calculateAverageGrade() {
    const total = this.grades.reduce((sum, grade) => sum + grade, 0);
    return total / this.grades.length;
  },
};

// Example usage
console.log(student.getName()); // Jane Doe
console.log(student.getAge()); // 22
console.log(student.getGrades()); // [95, 80, 87, 93]
console.log(student.calculateAverageGrade()); // 88.75
