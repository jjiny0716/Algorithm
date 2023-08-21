/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function(s, goal) {
  if (s.length !== goal.length) return false;

  const map = new Map();
  let hasDuplicate = false;
  for (const c of s) {
    map.set(c, (map.get(c) || 0) + 1);
    if (map.get(c) === 2) hasDuplicate = true; 
  }
  if (s === goal) {
    return hasDuplicate ? true : false;
  }

  const diffIndexes = [];
  for (let i = 0 ; i < s.length ; i++) {
    if (s[i] !== goal[i]) diffIndexes.push(i);
  }

  if (diffIndexes.length !== 2) return false;
  const [i, j] = diffIndexes;
  return s[i] === goal[j] && s[j] === goal[i];
};