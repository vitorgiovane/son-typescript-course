const multiplication = (multiplying, multiplier) => multiplying * multiplier;
const product = multiplication(3, 7);
console.log("product", product);
// Default parâmeter
const fullName = (firstName, lastName = "Giovane") => `${firstName} ${lastName}`;
const myFullName = fullName("Vitor");
console.log(myFullName);
// Opitional parâmeter
const incompleteName = (firstName, lastName) => `${firstName} ${lastName || ""}`;
const myIncompleteName = incompleteName("Vitor");
console.log(myIncompleteName);
