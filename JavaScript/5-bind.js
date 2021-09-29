'use strict';

function move(x, y, z) {
  this.x += x;
  this.y += y;
  this.z +=z;
}

function toString() {
  return `[${this.x}, ${this.y}, ${this.z}]`;
}

const p1 = { x: 10, y: 20, z: 40 };
const p1move = move.bind(p1);
const p1toString = toString.bind(p1);
p1move(-5, 10, -40);

console.log(p1);
console.log(p1toString());
console.log(`${p1}`);
