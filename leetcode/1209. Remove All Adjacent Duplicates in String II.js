/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var removeDuplicates = function(s, k) {
  const stack = [];

  for (let c of s) {
    if (!stack.length || stack.at(-1)[0] !== c) {
      stack.push([c, 1]);
    }
    else {
      stack.at(-1)[1]++;
      if (stack.at(-1)[1] === k) stack.pop();
    }
  }

  return stack.map(([char, count]) => char.repeat(count)).join('');
};

const s = "pbbcggttciiippooaais", k = 2;
console.log(removeDuplicates(s, k));