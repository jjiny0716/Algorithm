/**
 * @param {number[]} weights
 * @param {number} days
 * @return {number}
 */
var shipWithinDays = function (weights, days) {
  const totalWeight = weights.reduce((sum, weight) => sum += weight, 0);
  let left = 1, right = totalWeight;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const daySpent = simulate(weights, mid);
    if (days >= daySpent) right = mid - 1;
    else left = mid + 1;
  }
  
  return left;
};

function simulate(weights, capacity) {
  let days = 1;
  let curWeight = 0;
  for (let weight of weights) {
    if (weight > capacity) return Infinity;
    if (curWeight + weight > capacity) {
      curWeight = 0;
      days++;
    }
    curWeight += weight;
  }

  return days;
}

const weights = [3,2,2,4,1,4], days = 3;
console.log(shipWithinDays(weights, days));