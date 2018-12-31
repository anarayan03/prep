var Sample3 = /** @class */ (function () {
    function Sample3() {
        console.log("Finally" + i);
    }
    Sample3.prototype.doGet = function () {
        for (var i = 0; i < 5; i++) {
            console.log(i);
        }
    };
    return Sample3;
}());
var s = new Sample3();
s.doGet();
