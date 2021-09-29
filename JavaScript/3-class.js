'use strict';

class Point {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
  }

  move(x, y) {
    this.x += x;
    this.y += y;
    this.z +=z;
  }

  toString() {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  }

  static from(obj) {
    const { x, y, z } = obj;
    return new Point(x, y , z);
  }
}

const point1 = new Point(0, 0, 0);
point1.move(1, -1, 7);
point1.move(10, 0, -8);

const point2 = Point.from(point1);
point2.move(-7, 25, 8);

console.log('Point prototype:', Point.prototype);
console.log('move prototype:', Point.prototype.move.prototype);
console.log('constructor prototype:', Point.constructor.prototype);

const p1 = new Point(10, 20, 13);
p1.move(-5, 10, -10);

console.log(p1);
console.log(p1.toString());
console.log(`${p1}`);
