/**
 * @param {string} s
 * @return {number}
 */
var secondsToRemoveOccurrences = function(s) {
  let zeroCount = 0, seconds = 0;
  for (const bit of s) {
    if (bit === '0') zeroCount++;
    else if (zeroCount !== 0) {
      seconds = Math.max(seconds + 1, zeroCount);
    }
  }

  return seconds;
};

const s = "11100";
console.log(secondsToRemoveOccurrences(s));

// After one second, s becomes "1011010".
// After another second, s becomes "1101100".
// After the third second, s becomes "1110100".
// After the fourth second, s becomes "1111000".


// 01001
// 10010

// 01101
// 10110
// 11010
// 11100

// https://leetcode.com/problems/time-needed-to-rearrange-a-binary-string/solutions/2454262/dp-vs-brute-force/