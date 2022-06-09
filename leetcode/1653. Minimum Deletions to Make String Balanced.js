/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
  const stack = [];
  let count = 0;
  for (let c of s) {
    if (stack.length && stack.at(-1) === 'b' && c === 'a') {
      stack.pop();
      count++;
    }
    else stack.push(c);
  }

  return count;
};

const s = "aababbab";
console.log(minimumDeletions(s));