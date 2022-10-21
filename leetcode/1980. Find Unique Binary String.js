/**
 * @param {string[]} nums
 * @return {string}
 */
var findDifferentBinaryString = function(nums) {
  const n = nums.length;
  const numsSet = new Set(nums);

  let result = "";
  function findBinaryString(charArr) {
    if (result) {
      return;
    }
    if (charArr.length >= n) {
      const binaryStr = charArr.join('');
      if (!numsSet.has(binaryStr)) {
        result = binaryStr;
      }
      return;
    }

    for (let i = 0 ; i < 2 ; i++) {
      charArr.push(i);
      findBinaryString(charArr);
      charArr.pop();
    }
  }
  findBinaryString([]);

  return result;
};

const nums = ["111","011","001"];
console.log(findDifferentBinaryString(nums));


// Cantor's Diagonalization
// https://leetcode.com/problems/find-unique-binary-string/solutions/1418687/detailed-explanation-o-n-java-c-python-short-concise-code-cantor-s-diagonalization/