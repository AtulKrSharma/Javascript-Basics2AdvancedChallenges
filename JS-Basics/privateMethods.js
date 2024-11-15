class Teacher {
    constructor(fullName, className) {
        this._fullName = fullName;
        this._className = className;
    }

    set fullName(newFullName) {
        if (newFullName !== undefined && newFullName.trim() !== '') {
            this._fullName = newFullName.trim();
        } else {
            console.log('Invalid fullName');
        }
    }

    set className(newClassName) {
        if (newClassName !== undefined && newClassName.trim() !== '') {
            this._className = newClassName.trim();
        } else {
            console.log('Invalid className');
        }
    }

    get fullName() {
        return this._fullName;
    }

    get className() {
        return this._className;
    }
}

// Example usage
const teacher = new Teacher('John Doe', 'Math');
console.log(teacher.fullName); // John Doe
console.log(teacher.className); // Math

teacher.fullName = 'Jane Smith';
teacher.className = 'Science';
console.log(teacher.fullName); // Jane Smith
console.log(teacher.className); // Science

teacher.fullName = ''; // Invalid fullName
teacher.className = undefined; // Invalid className
