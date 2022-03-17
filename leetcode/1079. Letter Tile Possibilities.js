/**
 * @param {string} tiles
 * @return {number}
 */
var numTilePossibilities = function (tiles) {
  const charMap = {};
  for (let char of tiles) charMap[char] ? charMap[char]++ : charMap[char] = 1;

  let count = -1;
  function makeSequences(sequence) {
    count++;
    if (sequence.length === tiles.length) return;
    for (let [char, count] of Object.entries(charMap)) {
      if (count <= 0) continue;
      else {
        charMap[char]--;
        makeSequences(sequence + char);
        charMap[char]++;
      }
    }
  }
  makeSequences("");

  return count;
};

const tiles = "AAABBC";
console.log(numTilePossibilities(tiles));