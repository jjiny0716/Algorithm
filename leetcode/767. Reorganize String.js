/**
 * @param {string} s
 * @return {string}
 */
var reorganizeString = function (s) {
  const map = {};
  for (let char of s) map[char] ? map[char]++ : map[char] = 1;
  const result = Array.from({length: s.length});

  const entries = [...Object.entries(map)];
  let max = entries[0][1], maxIndex = 0;
  for (let i = 0 ; i < entries.length ; i++) {
    if (entries[i][1] > max) {
      max = entries[i][1];
      maxIndex = i;
    }
  }
  if (max >= s.length - max + 2) return "";
  entries.push(entries.splice(maxIndex, 1)[0]);

  let entryIndex = entries.length - 1;
  for (let i = 0 ; i < s.length ; i += 2) {
    result[i] = entries[entryIndex][0];
    if (--entries[entryIndex][1] === 0) entryIndex--;
  } 
  for (let i = 1; i < s.length ; i += 2) {
    result[i] = entries[entryIndex][0];
    if (--entries[entryIndex][1] === 0) entryIndex--;
  } 

  return result.join('');
};

const s = "aab";
console.log(reorganizeString(s));