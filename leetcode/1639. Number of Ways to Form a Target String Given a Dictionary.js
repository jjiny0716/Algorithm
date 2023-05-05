/**
 * @param {string[]} words
 * @param {string} target
 * @return {number}
 */
var numWays = function(words, target) {
  const MOD = 10 ** 9 + 7;
  const cache = Array.from({ length: words[0].length }, () => new Array(target.length).fill(-1));
  const sameCharCount = Array.from({ length: words[0].length }, () => new Array(target.length).fill(-1));
  const countAllCombination = (columnIndex, targetIndex) => {
    if (targetIndex === target.length) return 1;
    if (columnIndex >= words[0].length || targetIndex >= target.length) return 0;
    if (cache[columnIndex][targetIndex] !== -1) return cache[columnIndex][targetIndex];
    let count = sameCharCount[columnIndex][targetIndex];
    if (count === -1) {
      count = 0;
      for (let i = 0 ; i < words.length ; i++) {
        if (words[i][columnIndex] === target[targetIndex]) count++;
      } 
    }

    return cache[columnIndex][targetIndex] = (count * countAllCombination(columnIndex + 1, targetIndex + 1) + countAllCombination(columnIndex + 1, targetIndex)) % MOD;
  }

  return countAllCombination(0, 0);
};

const words = ["acca","bbbb","caca"], target = "aba";
console.log(numWays(words, target));

// a c c a
// b b b b
// c a c a

// 1 ? ? ?
// ? ? ? ?
// ? ? ? ?