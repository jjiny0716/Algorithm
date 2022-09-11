/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function(s) {
  let absentCount = 0, consecutiveLateCount = 0;
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === 'A') absentCount++;
    if (s[i] === 'L' && s[i - 1] === 'L') consecutiveLateCount++;
    else consecutiveLateCount = 0;

    if (absentCount === 2 || consecutiveLateCount === 2) return false;
  }

  return true;
};

const s = "PPALLL";
console.log(checkRecord(s));