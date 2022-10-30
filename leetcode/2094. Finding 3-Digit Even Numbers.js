/**
 * @param {number[]} digits
 * @return {number[]}
 */
// TLE
// var findEvenNumbers = function (digits) {
//   const resultSet = new Set();
//   const usedIndexSet = new Set();

//   function makeAllNumbers(lastIndex = -1, digitArr = []) {
//     if (digitArr.length === 3) {
//       const number = +digitArr.join("");
//       if (digitArr[0] === 0 || number % 2 === 1) return;

//       resultSet.add(number);
//       return;
//     }

//     for (let i = 0; i < digits.length; i++) {
//       if (usedIndexSet.has(i)) continue;

//       usedIndexSet.add(i);
//       digitArr.push(digits[i]);
//       makeAllNumbers(0, digitArr);
//       usedIndexSet.delete(i);
//       digitArr.pop();
//     }
//   }

//   makeAllNumbers();

//   return [...resultSet.values()].sort((a, b) => a - b);
// };

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var findEvenNumbers = function (digits) {
  const resultSet = new Set();
  const digitCounter = digits.reduce(
    (map, digit) => map.set(digit, (map.get(digit) || 0) + 1),
    new Map()
  );

  function makeAllNumbers(digitArr = []) {
    if (digitArr.length === 3) {
      const number = +digitArr.join("");
      if (digitArr[0] === 0 || number % 2 === 1) return;

      resultSet.add(number);
      return;
    }

    for (let i = 0; i <= 9; i++) {
      if (digitArr.length === 0 && i === 0) continue;
      if (!digitCounter.get(i)) continue;
      digitCounter.set(i, digitCounter.get(i) - 1);
      digitArr.push(i);
      makeAllNumbers(digitArr);
      digitArr.pop();
      digitCounter.set(i, digitCounter.get(i) + 1);
    }
  }

  makeAllNumbers();

  return [...resultSet.values()].sort((a, b) => a - b);
};

const digits = [2, 1, 3, 0];
console.log(findEvenNumbers(digits));
