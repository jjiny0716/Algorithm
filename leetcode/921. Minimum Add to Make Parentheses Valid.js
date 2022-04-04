/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
  const stack = [];
  let result = 0;
  for (let char of s) {
    if (char === "(") stack.push(char);
    else result += stack.pop() ? 0 : 1;
  }

  return result + stack.length;
};

const s = "()))((";
// console.log(minAddToMakeValid(s));

// 더 최적화
var minAddToMakeValid2 = function (s) {
  let result = 0, count = 0;
  for (let char of s) {
    if (char === "(") count++;
    else count ? count-- : result++;
  }

  return result + count;
};

console.log(minAddToMakeValid2(s));