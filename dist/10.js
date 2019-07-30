var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Bird = /** @class */ (function () {
    function Bird() {
    }
    Bird.prototype.eat = function () {
        console.log("eat");
    };
    Bird.prototype.fly = function () {
        console.log("fly at");
    };
    return Bird;
}());
var Falcon = /** @class */ (function (_super) {
    __extends(Falcon, _super);
    function Falcon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Falcon.prototype.fly = function () {
        _super.prototype.fly.call(this);
        console.log("The falcon flies at " + this.velocity + " km/h");
    };
    return Falcon;
}(Bird));
var falcon = new Falcon();
falcon.color = "brown";
falcon.velocity = 90;
falcon.fly();
console.log(falcon);
