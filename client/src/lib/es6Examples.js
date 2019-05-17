'use strict'

class Shape {
  constructor(name) {
    this.name = name
  }
}


class Circle extends Shape{
  constructor({ diameter, radius }) {
    super('circle')
    this.PI = 3.141593
    this.diameter = diameter
    this.radius = radius

    if (!this.diameter && !this.radius) { throw new Error('You must define a diameter or radius when instantiating a new Circle') }
    if (this.diameter && !this.radius) { this.radius = this.diameter / 2 }
    if (!this.diameter && this.radius) { this.diameter = this.radius * 2 }
  }

  circumference() {
    return this.PI * this.diameter
  }
  area() {
    return this.PI * (this.radius ** 2)
  }
}

class Sphere extends Circle {
  constructor({ diameter, radius }) {
    super({ diameter, radius })
    this.name = 'sphere'
  }

  volume() {
    return (4/3) * this.PI * (this.radius ** 3)
  }
}

export { Shape, Circle, Sphere }
