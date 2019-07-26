// boolean
let success: boolean = false
// success

// numbers
let num1: number = 10
let num2: number = 10.5
let num3: number = 0xfa

let name1 = "Vitor Giovane"
let name2: string = "Vitor Giovane"

// array
let letters: string[] = ["a", "b", "c"]
let words: Array<string> = ["tree", "ball", "man"]

// enum
enum maritalStatus {
  single,
  married,
  divorcied,
  widower
}

const myMaritalStatus: maritalStatus = maritalStatus.single
if (myMaritalStatus === maritalStatus.single) {
  console.log("I am single")
}
