// /**
//  * @param {string} customers
//  * @return {number}
//  */
// var bestClosingTime = function(customers) {
//   return customers.split('').reduce((arr, c) => {
//     arr.push(arr.at(-1) + (c === "Y" ? 1 : 0));
//     return arr;
//   }, [0]).reduce(([minPenalty, minPenaltyIndex], pSumValue, i, pSumArr) => {
//     const leftNCount = i - pSumValue;
//     const rightYCount = pSumArr.at(-1) - pSumValue;
//     const penalty = leftNCount + rightYCount;
//     return penalty < minPenalty ? [penalty, i] : [minPenalty, minPenaltyIndex];
//   }, [Infinity, -1])[1];
// };

/**
 * @param {string} customers
 * @return {number}
 */
var bestClosingTime = function(customers) {
  let profit = 0, maxProfit = 0, maxProfitIndex = 0;
  for (let i = 0 ; i < customers.length ; i++) {
    const c = customers[i];
    profit += c === "Y" ? 1 : -1;
    if (profit > maxProfit) {
      maxProfit = profit;
      maxProfitIndex = i + 1;
    }
  }

  return maxProfitIndex;
};

const customers = "YYYY";
console.log(bestClosingTime(customers));

/**
 *     console.log(`-- Phase ${i} --`)
    console.log("leftYCount: ", leftYCount);
    console.log("leftNCount: ", leftNCount);
    console.log("rightYCount: ", rightYCount);
    console.log("rightNCount: ", rightNCount);
 */