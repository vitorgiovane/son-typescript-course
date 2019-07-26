// boolean
let success = false;
// success
// numbers
let num1 = 10;
let num2 = 10.5;
let num3 = 0xfa;
let name1 = "Vitor Giovane";
let name2 = "Vitor Giovane";
// array
let letters = ["a", "b", "c"];
let words = ["tree", "ball", "man"];
// enum
var maritalStatus;
(function (maritalStatus) {
    maritalStatus[maritalStatus["single"] = 0] = "single";
    maritalStatus[maritalStatus["married"] = 1] = "married";
    maritalStatus[maritalStatus["divorcied"] = 2] = "divorcied";
    maritalStatus[maritalStatus["widower"] = 3] = "widower";
})(maritalStatus || (maritalStatus = {}));
const myMaritalStatus = maritalStatus.single;
if (myMaritalStatus === maritalStatus.single) {
    console.log("I am single");
}
