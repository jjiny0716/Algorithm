/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
  let ans = 0;
  while (target !== startValue) {
    if (target > startValue) {
      if (target % 2 === 0) {
        target /= 2;
      }
      else {
        target++;
      }
    }
    else {
      target++;
    }

    ans++;
  }

  return ans;
};

const startValue = 3, target = 10;
console.log(brokenCalc(startValue, target));

// 속도+
/**
 * @param {number} startValue
 * @param {number} target
 * @return {number}
 */
var brokenCalc = function(startValue, target) {
  let ans = 0;
  while (target > startValue) {
    if (target % 2 === 0) target /= 2;
    else target++;
    ans++;
  }
  ans += startValue - target;
  return ans;
};