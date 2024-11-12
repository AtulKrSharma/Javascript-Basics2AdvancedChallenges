var carArray = ['Subaru', 'Mazda', 'Tesla', 'Camry'];
function arrayReadConcat(arr) {
    var concat = '';
    for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
        var iterator = arr_1[_i];
        concat = concat + "-" + iterator;
    }
    return concat;
}
console.log(arrayReadConcat(carArray));
