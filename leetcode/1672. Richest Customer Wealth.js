/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let max = 0;
  for (let account of accounts) {
    max = Math.max(max, account.reduce((prev, cur) => prev += cur), 0);
  }

  return max;
};

const accounts = [[1,5],[7,3],[3,5]];
console.log(maximumWealth(accounts));