/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
    for (let i = 0 ; i < gas.length ; i++) {
      let gasTank = gas[i] - cost[i];
      if (gasTank < 0) continue;
      let station = 0;
      for (station = (i + 1) % gas.length ; station !== i ; station = (station + 1) % gas.length) {
        gasTank += gas[station];
        gasTank -= cost[station];
        if (gasTank < 0) break; 
      }
      if (i === station) return i;
    }

  return -1;
};

console.log(canCompleteCircuit([2, 3, 4], [3, 4, 3]));
