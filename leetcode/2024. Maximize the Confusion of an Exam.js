/**
 * @param {string} answerKey
 * @param {number} k
 * @return {number}
 */
var maxConsecutiveAnswers = function(answerKey, k) {
  let tCount = 0;
  let i = 0, result = 0;

  for (let j = 0 ; j < answerKey.length ; j++) {
    if (answerKey[j] === 'T') tCount++;
    if (tCount <= k || (j - i + 1) - tCount <= k) {
      result = Math.max(result, j - i + 1);
    }
    else {
      if (answerKey[i] === 'T') tCount--;
      i++;
    }
  }

  return result;
};

const answerKey = "TTFTTFTT", k = 1;
console.log(maxConsecutiveAnswers(answerKey, k));