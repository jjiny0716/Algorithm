/**
 * @param {string} s
 * @param {number[][]} shifts
 * @return {string}
 */
var shiftingLetters = function(s, shifts) {
  const shiftCounts = new Array(s.length).fill(0);
  for (const [start, end, direction] of shifts) {
    shiftCounts[start] += direction ? 1 : -1;
    shiftCounts[end + 1] += direction ? -1 : 1;
  }

  for (let i = 1 ; i < s.length ; i++) {
    shiftCounts[i] = shiftCounts[i] + shiftCounts[i - 1];
  }

  return s.split('').map((char, index) => {
    const shift = shiftCounts[index] > 0 ? shiftCounts[index] : 26 - Math.abs(shiftCounts[index]) % 26;
    return String.fromCharCode((char.charCodeAt(0) - 'a'.charCodeAt(0) + 26 + shift) % 26 + 'a'.charCodeAt(0));
  }).join('');
};

const s = "abc", shifts = [[0,1,0],[1,2,1],[0,2,1]];
console.log(shiftingLetters(s, shifts));
console.log('_'.charCodeAt(0));
console.log('a'.charCodeAt(0));

console.log(26 - Math.abs(-27) % 26);