/**
 * @param {string} num
 * @return {number[]}
 */
var splitIntoFibonacci = function (num) {
  let result = [];
  function makeFibonacci(lastIndex, fibArr) {
    if (result.length !== 0) return;
    if (lastIndex === num.length - 1) {
      if (fibArr.length > 2) result = [...fibArr];
      return;
    }

    for (let i = lastIndex + 1; i < num.length; i++) {
      const slice = Number(num.slice(lastIndex + 1, i + 1));
      if (slice >= 2 ** 31) continue;
      if (slice.toString() !== num.slice(lastIndex + 1, i + 1)) continue;
      if (fibArr.length >= 2 && fibArr.at(-2) + fibArr.at(-1) !== slice) continue;

      fibArr.push(slice);
      makeFibonacci(i, fibArr);
      fibArr.pop();
    }
  }
  makeFibonacci(-1, []);

  return result;
};

const num = "1101111";
console.log(splitIntoFibonacci(num));
