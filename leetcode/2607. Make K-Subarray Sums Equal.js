/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var makeSubKSumEqual = function (arr, k) {
  const findMinDist = (arr, startIndex, space) => {
    const newArr = arr
      .reduce((prev, cur, i) => {
        if (i % space !== startIndex) return prev;
        prev.push(cur);
        return prev;
      }, [])
      .sort((a, b) => a - b);
    const total = newArr.reduce((prev, cur) => prev + cur);
    let curDist = total - newArr.length * newArr[0];
    let minDist = curDist;

    for (let i = 1; i < newArr.length; i++) {
      if (newArr[i - 1] === newArr[i]) continue;
      const diff = newArr[i] - newArr[i - 1];
      curDist = curDist + diff * i - diff * (newArr.length - i);
      minDist = Math.min(minDist, curDist);
    }

    return minDist;
  };

  const calGCD = (a, b) => {
    if (a === b) return a;
    if (a > b) [a, b] = [b, a];
    return calGCD(a, b - a);
  };

  const gcd = calGCD(arr.length, k);

  if (gcd === 1) {
    return findMinDist(arr, 0, 1);
  }

  let result = 0;
  for (let i = 0; i < gcd; i++) {
    result += findMinDist(arr, i, gcd);
  }
  return result;
};

const arr = [6,2,8,5,7,10],
  k = 4;
console.log(makeSubKSumEqual(arr, k));
