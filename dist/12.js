"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var myNumbers = [];
function everest(param) {
    return param;
}
var mountain = everest("Vitor");
var List = /** @class */ (function () {
    function List() {
        this.items = [];
    }
    List.prototype.add = function (item) {
        this.items.push(item);
    };
    List.prototype.remove = function (item) { };
    return List;
}());
var list = new List();
list.add(1);
console.log(list);
