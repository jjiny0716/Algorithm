/**
 * @param {string} s
 * @return {number}
 */
 var maxLengthBetweenEqualCharacters = function(s) {
  const map = {};
  let result = -1;
  for (let i = 0 ; i < s.length ; i++) {
    if (map[s[i]] === undefined) map[s[i]] = i;
    else result = Math.max(result, i - map[s[i]] - 1); 
  }

  return result;
};

const s = "abca";
console.log(maxLengthBetweenEqualCharacters(s));