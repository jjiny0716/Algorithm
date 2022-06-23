/**
 * @param {string} s
 * @return {string}
 */
var removeDuplicates = function(s) {
  const stack = [];
  for (let c of s) {
    if (stack.at(-1) === c) stack.pop();
    else stack.push(c);
  }

  return stack.join('');
};

const s = "abbaca";
console.log(removeDuplicates(s));