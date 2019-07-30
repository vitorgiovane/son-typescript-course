// boolean
var success = false;
// success
// numbers
var num1 = 10;
var num2 = 10.5;
var num3 = 0xfa;
var name1 = "Vitor Giovane";
var name2 = "Vitor Giovane";
// array
var letters = ["a", "b", "c"];
var words = ["tree", "ball", "man"];
// enum
var maritalStatus;
(function (maritalStatus) {
    maritalStatus[maritalStatus["single"] = 0] = "single";
    maritalStatus[maritalStatus["married"] = 1] = "married";
    maritalStatus[maritalStatus["divorcied"] = 2] = "divorcied";
    maritalStatus[maritalStatus["widower"] = 3] = "widower";
})(maritalStatus || (maritalStatus = {}));
var myMaritalStatus = maritalStatus.single;
if (myMaritalStatus === maritalStatus.single) {
    console.log("I am single");
}
