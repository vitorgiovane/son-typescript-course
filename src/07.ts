const multiplication = (multiplying: number, multiplier: number): number =>
  multiplying * multiplier
const product = multiplication(3, 7)
console.log("product", product)

// Default parâmeter
const fullName = (firstName: string, lastName: string = "Giovane") =>
  `${firstName} ${lastName}`
const myFullName = fullName("Vitor")
console.log(myFullName)

// Opitional parâmeter
const incompleteName = (firstName: string, lastName?: string) =>
  `${firstName} ${lastName || ""}`
const myIncompleteName = incompleteName("Vitor")
console.log(myIncompleteName)
