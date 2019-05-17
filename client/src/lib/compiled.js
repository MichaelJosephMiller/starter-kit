/* eslint-disable no-console */

class Shape {
  constructor(name) {
    this.name = name
  }
}

class Circle extends Shape {
  constructor({ diameter, radius }) {
    super('circle')
    this.PI = 3.141593
    this.diameter = diameter
    this.radius = radius

    if (!diameter && !radius) {
      throw new Error('You must define a diameter or radius when instantiating a new Circle')
    } else if (this.diameter && !this.radius) {
      this.radius = this.diameter / 2
    } else if (!this.diameter && this.radius) {
      this.diameter = this.radius * 2
    }
  }

  circumference() {
    return this.PI * this.diameter
  }
  area() {
    return this.PI * (this.radius ^ 2)
  }
}

class Sphere extends Circle {
  constructor({ diameter, radius }) {
    super({ diameter, radius })
  }

  volume() {
    return 4 / 3 * this.PI * (this.radius ^ 3)
  }
}

let circle = new Circle({ diameter: 10 })
console.log(`Circumference: ${circle.circumference()}`)
console.log(`Area: ${circle.area()}`)

let sphere = new Sphere({ radius: 5 })
console.log(`Sphere volume: ${sphere.volume()}`)
