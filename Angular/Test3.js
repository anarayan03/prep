var Test3 = /** @class */ (function () {
    function Test3(output) {
        this.output = output;
    }
    return Test3;
}());
function doGet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally " + i);
}
