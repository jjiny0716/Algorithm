/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
 var canConstruct = function (ransomNote, magazine) {
  const map1 = {};
  const map2 = {};

  for (let char of ransomNote) {
    map1[char] ? map1[char]++ : map1[char] = 1;
  }
  for (let char of magazine) {
    map2[char] ? map2[char]++ : map2[char] = 1;
  }

  const keys = Object.keys(map1);

  return keys.every(key => map1[key] <= map2[key]);
};

// 다른 버전

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct2 = function (ransomNote, magazine) {
  const available = {};

  for (let char of magazine) {
    available[char] ? available[char]++ : available[char] = 1;
  }

  for (let char of ransomNote) {
    if (available[char] === 0 || available[char] === undefined) return false;
    available[char]--;
  }

  return true;
};

const a = "a";
const b = "b";

console.log(canConstruct2(a, b));