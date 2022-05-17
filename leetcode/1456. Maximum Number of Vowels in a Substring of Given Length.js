/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var maxVowels = function(s, k) {
  const vowels = {
    a: true,
    e: true,
    i: true,
    o: true,
    u: true,
  }

  let currentNumberOfVowels = 0;
  for (let i = 0 ; i < k ; i++) {
    if (vowels[s[i]]) currentNumberOfVowels++;
  }
  let maxNumberOfVowels = currentNumberOfVowels;

  for (let l = 1, r = k ; r < s.length ; l++, r++) {
    currentNumberOfVowels += vowels[s[r]] ? 1 : 0;
    currentNumberOfVowels -= vowels[s[l - 1]] ? 1 : 0;
    maxNumberOfVowels = Math.max(maxNumberOfVowels, currentNumberOfVowels);
  }

  return maxNumberOfVowels;
};

const s = "abciiidef", k = 3;
console.log(maxVowels(s, k));