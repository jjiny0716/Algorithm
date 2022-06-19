/**
 * @param {string} s
 * @param {number[]} spaces
 * @return {string}
 */
var addSpaces = function(s, spaces) {
  const substrings = [];
  let last = 0;
  spaces.push(s.length);

  for (let space of spaces) {
    substrings.push(s.slice(last, space));
    last = space;
  }

  return substrings.join(' ');
};

const s = "LeetcodeHelpsMeLearn", spaces = [8,13,15];
console.log(addSpaces(s, spaces));