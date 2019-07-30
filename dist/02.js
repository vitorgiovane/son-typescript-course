function showWithVar() {
    var text = "Vitor Giovane";
    if (true) {
        var text = "text";
    }
    console.log(text);
}
function showWithLet() {
    var text = "Vitor Giovane";
    if (true) {
        var text_1 = "text";
    }
    console.log(text);
}
var showWithVarArrowFunction = function () {
    var text = "Vitor Giovane";
    if (true) {
        var text = "text";
    }
    console.log(text);
};
var showWithLetArrowFunction = function () {
    var text = "Vitor Giovane";
    if (true) {
        var text_2 = "text";
    }
    console.log(text);
};
showWithVar();
showWithLet();
showWithVarArrowFunction();
showWithLetArrowFunction();
