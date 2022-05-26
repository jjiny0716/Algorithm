/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  satisfaction.sort((a, b) => b - a);
  
  let result = 0, currentSatisfaction = 0, pSum = 0;
  for (let s of satisfaction) {
    pSum += s;
    if (pSum <= 0) return;
    currentSatisfaction += pSum;
    result = Math.max(result, currentSatisfaction);
  }

  return result;
};


const satisfaction = [-1,-8,0,5,-9];
console.log(maxSatisfaction(satisfaction));