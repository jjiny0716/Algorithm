/**
 * @param {number[]} tokens
 * @param {number} power
 * @return {number}
 */
var bagOfTokensScore = function(tokens, power) {
  tokens.sort((a, b) => a - b);
  let left = 0, right = tokens.length - 1;
  let score = 0;
  while (left <= right) {
    if (power < tokens[left]) {
      if (score === 0 || left === right) return score;
      power += tokens[right--];
      score--;
    }
    else {
      power -= tokens[left++];
      score++;
    }
  }

  return score;
};

const tokens = [100, 200], power = 150;
console.log(bagOfTokensScore(tokens, power));