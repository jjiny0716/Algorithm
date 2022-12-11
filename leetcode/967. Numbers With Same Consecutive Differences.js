// /**
//  * @param {number} n
//  * @param {number} k
//  * @return {number[]}
//  */
// var numsSameConsecDiff = function(n, k) {
//   const result = [];

//   const makeResult = (digits = []) => {
//     if (digits.length === n) {
//       result.push(Number(digits.join('')));
//       return;
//     }

//     for (let i = 0 ; i <= 9 ; i++) {
//       if (i === 0 && digits.length === 0) continue;
//       if (digits.at(-1) !== undefined && Math.abs(digits.at(-1) - i) !== k) continue;
//       digits.push(i);
//       makeResult(digits);
//       digits.pop();
//     }
//   }
//   makeResult();

//   return result;
// };

// 성능 개선
const numsSameConsecDiff = function(n, k) {
  const result = [];

  const makeResult = (digits = []) => {
    if (digits.length === n) {
      result.push(Number(digits.join('')));
      return;
    }

    if (!digits.length) {
      for (let i = 1 ; i <= 9 ; i++) {
        digits.push(i);
        makeResult(digits);
        digits.pop();
      }
      return;
    }

    const isZeroToNine = (n) => 0 <= n && n <= 9;

    if (isZeroToNine(digits.at(-1) - k)) {
      digits.push(digits.at(-1) - k);
      makeResult(digits);
      digits.pop();
    }

    if (k !== 0 && isZeroToNine(digits.at(-1) + k)) {
      digits.push(digits.at(-1) + k);
      makeResult(digits);
      digits.pop();
    }
  }
  makeResult();

  return result;
};

const n = 2, k = 1;
console.log(numsSameConsecDiff(n, k));
