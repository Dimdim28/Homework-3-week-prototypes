'use strict';

const point = (x, y, z) => {
  const p = {};

  p.move = (dx, dy, dz) => {
    x += dx;
    y += dy;
    z += dz;
  };

  p.toString = () => `[${x}, ${y}, ${z}]`;

  return p;
};

const p1 = point(10, 20, 30);
p1.move(-5, 10,30);

console.log('1 ' + p1);
console.log('2 ' + p1.toString());
console.log(`3 ${p1}`);
