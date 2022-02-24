/**
 * @param {number} num
 * @return {boolean}
 */
// 이진 탐색을 이용해봤음. O(log(n))
var isPerfectSquare = function (num) {
  let left = 0;
  let right = 2 ** 16;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (mid * mid < num) left = mid + 1;
    else if (mid * mid > num) right = mid - 1;
    else return true;
  }

  return false;
};

console.log(2 ** 16);

console.log(isPerfectSquare(14));
