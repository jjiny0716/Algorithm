/**
 * @param {number} n
 * @param {number[]} quantities
 * @return {number}
 */
var minimizedMaximum = function(n, quantities) {
  const max = Math.max(...quantities);

  const distribute = (maxAmount) => {
    let distributedStoreCount = 0;
    for (const q of quantities) {
      distributedStoreCount += Math.ceil(q / maxAmount);
    }

    return distributedStoreCount <= n;
  }

  let left = 1, right = max;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (distribute(mid)) right = mid;
    else left = mid + 1;
  }

  return left;
};

const n = 6, quantities = [11,6];
console.log(minimizedMaximum(n, quantities));