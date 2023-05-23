/**
 * @param {number} n
 * @param {number[]} cost
 * @return {number}
 */
var minIncrements = function(n, cost) {
  let result = 0;
  for (let i = n - 2 ; i > 0 ; i -= 2) {
    const max = Math.max(cost[i], cost[i + 1]);
    const min = Math.min(cost[i], cost[i + 1]);
    const incrementCount = max - min;
    result += incrementCount;

    const parentIndex = Math.floor(i / 2);
    cost[parentIndex] += max;
  }

  return result;
};

const n = 7, cost = [1,5,2,2,3,3,1];
console.log(minIncrements(n, cost));


//    1
//  8   5
// 3 3 3 1