/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function (num) {
  num = num.toString().split("");
  for (let i = 0; i < num.length - 1; i++) {
    let max = num[i + 1], maxIndex = i + 1;
    for (let j = i + 1 ; j < num.length ; j++) {
      if (max <= num[j]) {
        max = num[j];
        maxIndex = j;
      }
    }
    if (max > num[i]) {
      [num[i], num[maxIndex]] = [num[maxIndex], num[i]];
      return Number(num.join(''));
    }
  }
  return Number(num.join(''));
};

console.log(maximumSwap(
  98368));
