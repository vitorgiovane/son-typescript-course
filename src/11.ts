interface PersonInterface {
  name: string
  age: number
  eat()
  walk()
}

interface WorkerInterface extends PersonInterface {
  velocity: number
  work()
}

class Worker implements WorkerInterface {
  name: string
  age: number
  velocity!: number
  private sleep: number
  eat() {
    console.log("Eating...")
  }
  walk() {
    console.log("Walking...")
  }
  work() {
    console.log("Working...")
  }
}

interface ProgrammerInterface extends WorkerInterface {
  studyTime: number
}

class Programmer extends Worker implements ProgrammerInterface {
  studyTime: number
  work() {
    super.work()
    console.log(
      `The programmer ${this.name} is working at ${this.velocity} lines/second.`
    )
  }
}

let vitor = new Programmer()
vitor.name = "Vitor"
vitor.velocity = 90
vitor.work()

console.log(vitor)
