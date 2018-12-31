function sumAll() {
    var num = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        num[_i] = arguments[_i];
    }
    var sum = 0;
    for (var _a = 0, num_1 = num; _a < num_1.length; _a++) {
        var data = num_1[_a];
        sum = sum + data;
        //console.log(data)
    }
    console.log(sum);
}
sumAll(1, 2, 3, 4, 5);
