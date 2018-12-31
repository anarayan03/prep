var Sample2 = /** @class */ (function () {
    function Sample2() {
    }
    Sample2.prototype.doGet = function () {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
        console.log("Finally" + i);
    };
    return Sample2;
}());
var s = new Sample2();
s.doGet();
