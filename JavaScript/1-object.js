'use strict';

const p1 = {
  x: 10,
  y: 20,
  z: 30,

  move(x, y, z) {
    this.x += x;
    this.y += y;
    this.z += z;
  },

  toString() {
    return `[${this.x}, ${this.y}, ${this.z}]`;
  },
};

p1.move(-5, 10, 30);

console.log(p1);
console.log(p1.toString());
console.log(p1 + '');
