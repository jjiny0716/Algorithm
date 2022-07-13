/**
 * @param {string} s
 * @return {string}
 */
var minRemoveToMakeValid = function(s) {
  s = s.split('');
  let stack = [];
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] === '(') {
      stack.push('(');
    }
    else if (s[i] === ')') {
      if (stack.at(-1) === '(') {
        stack.pop();
      }
      else {
        s.splice(i, 1);
        i--;
      }
    }
  }

  stack = [];
  for (let i = s.length - 1 ; i >= 0 ; i--) {
    console.log(s[i], stack);
    if (s[i] === ')') {
      stack.push(')');
    }
    else if (s[i] === '(') {
      if (stack.at(-1) === ')') {
        stack.pop();
      }
      else {
        s.splice(i, 1);
      }
    }
  }

  return s.join('');
};

const s = "lee((((t(c)o)de)";
console.log(minRemoveToMakeValid(s));