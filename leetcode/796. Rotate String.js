/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var rotateString = function (s, goal) {
  for (let i = 0 ; i < s.length ; i++) {
    let j = i;
    for (j = 0 ; j < s.length ; j++) {
      if (s[(i + j) % s.length] !== goal[j]) break;
    }
    if (j === s.length) return true;
  }

  return false;
};

const s = "abcde", goal = "cdeab";
console.log(rotateString(s, goal));

// ?????????? 🤪
var rotateString2 = function (s, goal) {
  return s.length === goal.length && (s + s).includes(goal);
};
console.log(rotateString2(s, goal));