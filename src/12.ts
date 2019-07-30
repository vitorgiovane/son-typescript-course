import { addListener } from "cluster"

let myNumbers: Array<number> = []

function everest<T>(param: T): T {
  return param
}

let mountain: string = everest<string>("Vitor")

class List<T> {
  items: Array<T> = []

  add(item: T) {
    this.items.push(item)
  }

  remove(item: T) {}
}

let list = new List<number>()
list.add(1)
console.log(list)
