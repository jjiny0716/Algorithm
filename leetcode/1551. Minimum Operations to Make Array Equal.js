/**
 * @param {number} n
 * @return {number}
 */
var minOperations = function(n) {
  if (n % 2 === 0) retirm (n / 2) ** 2;
  else {
    n = (n - 1) / 2;
    return n * (n + 1) / 2;
  }
};

// 1  0
// 3  1 1
// 5  2 1 1 2
// 7  3 2 1 1 2 3

// 1 3 6 10


// 2  1
// 4  1 3
// 6  1 3 5

// (n / 2) ** 2