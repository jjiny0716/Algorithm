/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function (arr) {
  let result = Infinity;
  function makeAllPossibleBstCost(values, totalCost) {
    console.log(values);
    if (values.length === 1) {
      result = Math.min(result, totalCost);
      return;
    }

    if (values.length % 2 === 0) {
      const nextValues = [];
      for (let i = 0; i < values.length - 1; i += 2) {
        totalCost += values[i] * values[i + 1];
        nextValues.push(Math.max(values[i], values[i + 1]));
      }

      makeAllPossibleBstCost(nextValues, totalCost);
    }
    else {
      for (let except = 0 ; except < values.length ; except += 2) {
        const nextValues = [];
        let nextCost = totalCost;
        for (let i = 0 ; i < values.length ; i += 2) {
          if (i === except) {
            nextValues.push(values[i]);
            i--;
            continue;
          }

          nextCost += values[i] * values[i + 1];
          nextValues.push(Math.max(values[i], values[i + 1]));
        }
        makeAllPossibleBstCost(nextValues, nextCost);
      }
    }
  }

  makeAllPossibleBstCost(arr, 0);

  return result;
};

const arr = [15,13,5,3,15];
console.log(mctFromLeafValues(arr));
