/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let left = 1, right = n;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    const result = guess(mid);
    switch(result) {
      case 0: 
        return mid;
      case 1:
        left = mid + 1;
        break;
      case -1:
        right = mid - 1;
        break;
    }
  }
  
  return left;
};
