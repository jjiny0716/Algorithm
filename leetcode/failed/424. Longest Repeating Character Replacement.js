/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  const n = s.length;
  const map = {};
  for (let char of s) map[char] = (map[char] || 0) + 1;

  let size = n, i = 0;
  let direction = "right";
  while (size > 0) {
    if (size - getMaxValue(map) <= k) return size;
    if (direction === "right" && i === n - size) {
      size--;
      map[s[i]]--;
      i++;
      direction = "left";
    }
    else if (direction === "left" && i === 0) {
      size--;
      map[s[size]]--;
      direction = "right";
    }
    else if (direction === "right") {
      map[s[i]]--;
      map[s[i + size]]++;
      i++;
    }
    else if (direction === "left") {
      i--;
      map[s[i + size]]--;
      map[s[i]]++;
    }
  }

  function getMaxValue(map) {
    let max = 0;
    for (let i = 0 ; i < 26 ; i++) {
      max = Math.max(max, map[String.fromCharCode('A'.charCodeAt(0) + i)] || 0);
    }
    return max;
  }

  return 0;
};

const s = "AABABBA", k = 1;
console.log(characterReplacement(s, k));