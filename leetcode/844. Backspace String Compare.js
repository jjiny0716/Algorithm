/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  function applyBackspace(str) {
    const stack = [];
    for (let char of str) {
      if (char === "#") stack.pop();
      else stack.push(char);
    }
    return stack.join('');
  }

  return applyBackspace(s) === applyBackspace(t);
};

const s = "a#c", t = "b";
console.log(backspaceCompare(s, t));

// stack을 안쓰는 방법은? (공간복잡도 O(1))