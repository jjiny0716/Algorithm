/**
 * @param {number[]} candidates
 * @return {number}
 */
var largestCombination = function(candidates) {
  const bitCount = new Array(32).fill(0);
  for (const candidate of candidates) {
    const bitString = candidate.toString(2);
    for (let i = bitString.length - 1 ; i >= 0 ; i--) {
      bitCount[bitString.length - i - 1] += bitString[i] === '1' ? 1 : 0;
    }
  }

  return Math.max(...bitCount);
};

const candidates = [16,17,71,62,12,24,14];
console.log(largestCombination(candidates));

// 비트 연산쓰면 더 빨라질듯?
