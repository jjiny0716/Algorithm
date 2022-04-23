/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
  cost = cost.map((value, i) => gas[i] - value);
  if (cost.reduce((sum, value) => sum += value, 0) < 0) return -1;
  
  const n = cost.length;
  let s = 0, e = -1, gasTank = 0, length = 0;
  while (length < n) {
    if (gasTank >= 0) {
      e = (e + 1) % n;
      gasTank += cost[e];
      length++;
    }
    if (gasTank < 0) {
      gasTank -= cost[s];
      s = (s + 1) % n;
      length--;
    }
  }
  
  return s;
};

const gas = [2,3,4], cost = [3,4,3];
console.log(canCompleteCircuit(gas, cost));