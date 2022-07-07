/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
  const stack = [];
  for (let c of s) {
    if (stack.length && stack.at(-1) !== c && stack.at(-1).toLowerCase() === c.toLowerCase()) stack.pop();
    else stack.push(c);
  }

  return stack.join('');
};

const s = "leEeetcode";
console.log(makeGood(s));