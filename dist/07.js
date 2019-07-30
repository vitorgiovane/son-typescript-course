var multiplication = function (multiplying, multiplier) {
    return multiplying * multiplier;
};
var product = multiplication(3, 7);
console.log("product", product);
// Default parâmeter
var fullName = function (firstName, lastName) {
    if (lastName === void 0) { lastName = "Giovane"; }
    return firstName + " " + lastName;
};
var myFullName = fullName("Vitor");
console.log(myFullName);
// Opitional parâmeter
var incompleteName = function (firstName, lastName) {
    return firstName + " " + (lastName || "");
};
var myIncompleteName = incompleteName("Vitor");
console.log(myIncompleteName);
