/**
 * @param {string} s
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var maximumGain = function (s, x, y) {
  const stack = [];
  const [lessScoreStr, moreScoreStr] = x > y ? ["ba", "ab"] : ["ab", "ba"];
  const [smallScore, largeScore] = x < y ? [x, y] : [y, x];
  let score = 0;

  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === 'a' || s[i] === 'b') {
      if ((stack.at(-1) || '') + s[i] === moreScoreStr) {
        stack.pop();
        score += largeScore;
      }
      else stack.push(s[i])
    }
    else {
      resolveStack();
      stack.length = 0;
    }
  }
  resolveStack();

  function resolveStack() {
    let aCount = 0, bCount = 0;
    for (let char of stack) {
      char === "a" ? aCount++ : bCount++;
    }

    score += Math.min(aCount, bCount) * smallScore;
  }

  return score;
};

const  s = "aabbaaxybbaabb", x = 5, y = 4;
console.log(maximumGain(s, x, y));
