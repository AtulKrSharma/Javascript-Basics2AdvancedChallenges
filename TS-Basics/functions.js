function square(param1, param2) {
    return param1 * param2;
}
var cuber = function (param3) { return param3 * param3 * param3; };
function optional(name, passport, home) {
    if (home === void 0) { home = 'India'; }
    if (typeof home === 'undefined')
        return "".concat(name, "-").concat(passport);
    else
        return "".concat(name, "-").concat(passport, "-").concat(home);
}
console.log(optional('Atul', 'ATUL420'));
console.log(optional('Dhani', 123, 'Canada'));
// console.log(square(10, 20));
// console.log(cuber(4));
