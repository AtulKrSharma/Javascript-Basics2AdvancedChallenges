"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return "".concat(this.firstName, " ").concat(this.lastName);
    };
    Person.prototype.describe = function () {
        return "This is ".concat(this.firstName, " ").concat(this.lastName, ".");
    };
    return Person;
}());
exports.default = Person;
