/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters = function (s, shifts) {
  const pSum = [0];
  for (let i = shifts.length - 1 ; i >= 0 ; i--) {
    pSum.push(pSum[pSum.length - 1] + shifts[i]);
  }
  pSum.reverse();

  return s.split('').map((char, index) => {
    const aCharCode = 'a'.charCodeAt(0);
    return String.fromCharCode(((char.charCodeAt(0) - aCharCode) % 26 + pSum[index]) % 26 + aCharCode);
  }).join('');
};

const s = "abc", shifts = [3,5,9];
// console.log(shiftingLetters(s, shifts));

// 개선

/**
 * @param {string} s
 * @param {number[]} shifts
 * @return {string}
 */
var shiftingLetters2 = function (s, shifts) {
  let result = '', shift = 0;
  const aCharCode = 'a'.charCodeAt(0);
  for (let i = s.length - 1 ; i >= 0 ; i--) {
    shift += shifts[i];
    result = String.fromCharCode(((s[i].charCodeAt(0) - aCharCode) % 26 + shift) % 26 + aCharCode) + result;
  }
  return result;
};

console.log(shiftingLetters2(s, shifts));