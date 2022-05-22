/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
var minDays = function(bloomDay, m, k) {
  if (bloomDay.length < m * k) return -1;

  function countBouquets(curDay) {
    let bouquetsCount = 0;
    let adjCount = 0;
    for (let day of bloomDay) {
      if (day <= curDay) {
        adjCount++;
        if (adjCount === k) {
          adjCount = 0;
          bouquetsCount++;
        }
      }
      else adjCount = 0;
    } 

    return bouquetsCount;
  }

  let left = Math.min(...bloomDay), right = Math.max(...bloomDay);
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const count = countBouquets(mid);
    if (count < m) left = mid + 1;
    else right = mid - 1;
  }

  return left;
};

const bloomDay = [1,10,3,10,2], m = 3, k = 1;
console.log(minDays(bloomDay, m, k));