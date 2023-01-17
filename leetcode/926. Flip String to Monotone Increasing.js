/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
  let zero = 0, one = 0;

  for (const bit of s) {
    if (bit === '0') {
      one = Math.min(zero, one + 1);
    }
    else {
      zero++;
      one = Math.min(one, zero);
    }
  }

  return one;
};

const s = "010110";
console.log(minFlipsMonoIncr(s));


// 010011111
// z o r
// 0 0 0
// 1 0 0
// 1 1 ?
// 1 ? ?
// 2 ? ?
// 3 ? ?
// 4 ? ?
// 5 ? ?
// 6 ? ?