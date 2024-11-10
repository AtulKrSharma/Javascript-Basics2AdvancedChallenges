var MyClass = /** @class */ (function () {
    function MyClass(name, age) {
        this.name = name;
        this.age = age;
    }
    MyClass.prototype.getDetails = function () {
        return "".concat(this.name, " has age ").concat(this.age);
    };
    return MyClass;
}());
var primeClass = new MyClass('Atul', 40);
console.log(primeClass.name);
console.log(primeClass.age);
console.log(primeClass.getDetails());
