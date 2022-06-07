/**
 * @param {string} s
 * @return {string[]}
 */
var letterCasePermutation = function(s) {
  s = s.split('');
  const result = [];
  function makeAllPermutation(i, permutation) {
    if (i === s.length) {
      result.push(permutation.join(''));
      return;
    }

    if (!s[i].match(/[a-z]/i)) {
      permutation.push(s[i]);
      makeAllPermutation(i + 1, permutation);
      permutation.pop();
      return;
    }

    permutation.push(s[i].toLowerCase());
    makeAllPermutation(i + 1, permutation);
    permutation.pop();

    permutation.push(s[i].toUpperCase());
    makeAllPermutation(i + 1, permutation);
    permutation.pop();
  }
  makeAllPermutation(0, []);

  return result;
};

const s = "a1b2";
console.log(letterCasePermutation(s));