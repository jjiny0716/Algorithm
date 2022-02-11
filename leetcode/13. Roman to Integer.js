/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romans = {
    "I":1,
    "V":5,
    "X":10,
    "L":50,
    "C":100,
    "D":500,
    "M":1000
  }
  const n = {
    "I": "VX",
    "X": "LC",
    "C": "DM"
  }

  return s.split('').reduce((sum, char, i, arr) => {
    let sign = 1;
    if (n[char] !== undefined && n[char].includes(arr[i + 1])) sign = -1; 
    return sum += romans[char] * sign;
  }, 0);
};

console.log(romanToInt("LVIII"));
