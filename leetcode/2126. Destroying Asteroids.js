/**
 * @param {number} mass
 * @param {number[]} asteroids
 * @return {boolean}
 */
var asteroidsDestroyed = function(mass, asteroids) {
  asteroids.sort((a, b) => a - b);
  for (const a of asteroids) {
    if (a > mass) return false;
    mass += a;
  }

  return true;
};

const mass = 10, asteroids = [3,9,19,5,21];
console.log(asteroidsDestroyed(mass, asteroids));