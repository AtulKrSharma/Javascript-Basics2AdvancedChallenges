var Engineer = /** @class */ (function () {
    function Engineer(name, stream, year) {
        this.name = name;
        this.stream = stream;
        this.year = year;
    }
    Engineer.prototype.getFullDetails = function () {
        return "Full details are ".concat(this.name, "-").concat(this.stream, "-").concat(this.year);
    };
    return Engineer;
}());
var engineer1 = new Engineer('Atul', 'ECE', 2001);
console.log(engineer1);
console.log(engineer1.getFullDetails());
