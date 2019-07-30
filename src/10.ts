interface AnimalInterface {
  name: string
  color: string
  eat()
}

interface BirdInterface extends AnimalInterface {
  velocity: number
  fly()
}

class Bird implements BirdInterface {
  name: string
  color: string
  velocity: number
  eat() {
    console.log("eat")
  }
  fly() {
    console.log("fly at")
  }
}

class Falcon extends Bird {
  velocity: number

  fly() {
    super.fly()
    console.log(`The falcon flies at ${this.velocity} km/h`)
  }
}

let falcon = new Falcon()
falcon.color = "brown"
falcon.velocity = 90
falcon.fly()

console.log(falcon)
