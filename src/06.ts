let myName: any = "Vitor Giovane"
console.log(myName)

let count = (<string>myName).length

let person = {
  name: "Vitor"
}

console.log((<any>person).name)
console.log((person as any).name)

let numberToString = 200 + ""
let stringToNumber = +"200"

console.log("numberToString: ", typeof numberToString, numberToString)
console.log("stringToNumber: ", typeof stringToNumber, stringToNumber)
