/**
 * @param {number[]} price
 * @param {number} k
 * @return {number}
 */
var maximumTastiness = function(price, k) {
  price.sort((a, b) => a - b);

  const basketSizeWithMinimumTastiness = (minTastiness) => {
    let last = price[0];
    let count = 1;

    for (let i = 1 ; i < price.length ; i++) {
      if (price[i] - last < minTastiness) continue;
      last = price[i];
      count++;
    }

    return count;
  }

  let left = 0, right = price.at(-1) - price[0];
  while (left < right) {
    const mid = Math.floor((right + left) / 2);
    const basketSize = basketSizeWithMinimumTastiness(mid);

    if (basketSize >= k) left = mid + 1;
    else right = mid;
  }

  return basketSizeWithMinimumTastiness(left) < k ? left - 1 : left;
};

const price = [7, 7, 7, 7], k = 2;
console.log(maximumTastiness(price, k));