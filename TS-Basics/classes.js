var Engineer = /** @class */ (function () {
    function Engineer(name, stream, year, _isEnrolled) {
        if (_isEnrolled === void 0) { _isEnrolled = true; }
        this.name = name;
        this.stream = stream;
        this.year = year;
        this._isEnrolled = _isEnrolled;
    }
    Engineer.prototype.getFullDetails = function () {
        return "Full details are ".concat(this.name, "- ").concat(this._isEnrolled, "-").concat(this.stream, "-").concat(this.year);
    };
    Object.defineProperty(Engineer.prototype, "getName", {
        get: function () {
            return this.name;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engineer.prototype, "getStream", {
        get: function () {
            return this.stream;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engineer.prototype, "getyear", {
        get: function () {
            return this.year;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Engineer.prototype, "isEnrolled", {
        get: function () {
            return this._isEnrolled;
        },
        set: function (enrollmentValue) {
            this._isEnrolled = enrollmentValue;
        },
        enumerable: false,
        configurable: true
    });
    return Engineer;
}());
var engineer1 = new Engineer('Atul', 'ECE', 2001);
console.log(engineer1.getFullDetails());
//The assignment to a readonly property can only occur in one of two places:
//In the property declaration & In the constructor of the same class.
console.log(engineer1.getName);
engineer1.isEnrolled = false;
console.log(engineer1.getFullDetails());
