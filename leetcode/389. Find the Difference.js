/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const map1 = {}, map2 = {};
  for (let char of s) map1[char] ? map1[char]++ : map1[char] = 1;
  for (let char of t) map2[char] ? map2[char]++ : map2[char] = 1;
  for (let key of Object.keys(map2)) {
    if (map1[key] !== map2[key]) return key;
  }

  return null;
}

const s = "abcd", t = "abcde";
console.log(findTheDifference(s, t));

// XOR 이용

var findTheDifference2 = function (s, t) {
  let c = 0;
  for (let char of s) c ^= char.charCodeAt(0);
  for (let char of t) c ^= char.charCodeAt(0);

  return String.fromCharCode(c);
}
console.log(findTheDifference2(s, t));