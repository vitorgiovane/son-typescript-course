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
var Worker = /** @class */ (function () {
    function Worker() {
    }
    Worker.prototype.eat = function () {
        console.log("Eating...");
    };
    Worker.prototype.walk = function () {
        console.log("Walking...");
    };
    Worker.prototype.work = function () {
        console.log("Working...");
    };
    return Worker;
}());
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Programmer.prototype.work = function () {
        _super.prototype.work.call(this);
        console.log("The programmer " + this.name + " is working at " + this.velocity + " lines/second.");
    };
    return Programmer;
}(Worker));
var vitor = new Programmer();
vitor.name = "Vitor";
vitor.velocity = 90;
vitor.slee;
vitor.work();
console.log(vitor);
