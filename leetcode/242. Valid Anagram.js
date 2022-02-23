/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// 정렬 이용, O(nlogn)
var isAnagram = function (s, t) { 
  return s.split('').sort().join('') === t.split('').sort().join(''); 
};
s = "anagram", t = "nagaram"
console.log(isAnagram(s, t));


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
// O(n)
var isAnagram2 = function (s, t) { 
  const m = new Map();
  for (let char of s) {
    if (!m.get(char)) m.set(char, 0);
    m.set(char, m.get(char) + 1);
  }
  for (let char of t) {
    if (!m.get(char)) return false;
    m.set(char, m.get(char) - 1);
  }

  if ([...m.values()].some(value => value !== 0)) return false;
  return true;
};

console.log(isAnagram2(s, t));