/**
 * @param {string} stamp
 * @param {string} target
 * @return {number[]}
 */
var movesToStamp = function(stamp, target) {
  let i = 0, j = target.length - 1;
  const result = [];
  for (let c = 0 ; c < 10 * target.length ; c++) {
    if (i > j) return result;

    let leftMathCount = 0;
    while (stamp[leftMathCount] === target[i + leftMathCount] && target[i + leftMathCount]) leftMathCount++;

    let rightMathCount = 0;
    while (stamp[stamp.length - 1 - rightMathCount] === target[j - rightMathCount] && target[j - rightMathCount]) rightMathCount++;

    if (leftMathCount < rightMathCount) {
      result.push(i);
      i += leftMathCount;
    }
    else {
      result.push(j - stamp.length + 1);
      j -= rightMathCount;
    }
  }

  return [];
};

const stamp = "abc", target = "ababc";
console.log(movesToStamp(stamp, target));