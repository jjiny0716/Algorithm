/**
 * @param {number[]} plants
 * @param {number} capacity
 * @return {number}
 */
var wateringPlants = function (plants, capacity) {
  const n = plants.length;
  let steps = 0;
  let water = capacity;
  for (let i = 0 ; i < n ; i++) {
    steps++;
    water -= plants[i];
    if (plants[i + 1] > water) {
      water = capacity;
      steps += (i + 1) * 2;
    }
  }

  return steps;
};

const plants = [2,2,3,3], capacity = 5;
console.log(wateringPlants(plants, capacity));
