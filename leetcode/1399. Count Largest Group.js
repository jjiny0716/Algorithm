/**
 * @param {number} n
 * @return {number}
 */
var countLargestGroup = function(n) {
  const map = {};

  for (let i = 1 ; i <= n ; i++) {
    const digitSum = getDigitSum(i);
    map[digitSum] = (map[digitSum] || 0) + 1;
  }

  function getDigitSum(n) {
    let result = 0;
    while (n > 0) {
      result += n % 10;
      n = Math.floor(n / 10);
    }
    return result;
  }
  
  let maxSize = 0;
  let result = 0;
  for (let size of Object.values(map)) {
    if (maxSize < size) {
      maxSize = size;
      result = 1;
    }
    else if (maxSize === size) result++;
  } 

  return result;
};

const n = 24;
console.log(countLargestGroup(n));