function sum(param1, param2) {
    console.log(typeof param2);
    return param1 + (param2 !== null && param2 !== void 0 ? param2 : 0);
}
console.log(sum(20, 20));
console.log(sum(20));
