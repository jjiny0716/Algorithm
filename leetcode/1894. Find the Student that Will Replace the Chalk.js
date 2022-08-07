/**
 * @param {number[]} chalk
 * @param {number} k
 * @return {number}
 */
var chalkReplacer = function(chalk, k) {
  const total = chalk.reduce((prev, cur) => prev + cur, 0);
  k = k % total;

  for (let i = 0 ; i < chalk.length ; i++) {
    if (chalk[i] > k) return i;
    k -= chalk[i];
  }

  return -1;
};

const chalk = [3,4,1,2], k = 25;
console.log(chalkReplacer(chalk, k));