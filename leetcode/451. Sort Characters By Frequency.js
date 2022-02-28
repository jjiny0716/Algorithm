/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  const map = {};

  for (let char of s) 
    map[char] ? map[char]++ : map[char] = 1;

  return Object.entries(map).sort((a, b) => b[1] - a[1]).map(entry => entry[0].repeat(entry[1])).join('');
};

s = "tree"

console.log(frequencySort(s));

// bucket sort?