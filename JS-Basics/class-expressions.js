let Atul = class {

    constructor(name, location) {
        this._name = name;
        this._location = location;
    }

    set name(newName) {
        if (newName !== null && newName !== undefined && newName.trim() !== '') {
            this._name = newName.trim().toUpperCase();
        } else {
            console.log('try again, Please');
        }
    }

    set year(newYear) {
        if (newYear !== null && newYear !== undefined) {
            this._year = newYear + 10;
        } else {
            console.log('try again, Please');
        }
    }

    get location() {
        return this._location;
    }

    get name() {
        return this._name;
    }
}

let atulInstance = new Atul('Atul', 'India');
console.log(atulInstance.name); // "ATUL"
console.log(atulInstance.location); // "India"

atulInstance.name = 'Ravi';
console.log(atulInstance.name); // "RAVI"

atulInstance.year = 1983;
console.log(atulInstance._year); // 1993
