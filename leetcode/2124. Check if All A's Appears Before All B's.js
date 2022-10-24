/**
 * @param {string} s
 * @return {boolean}
 */
var checkString = function(s) {
  let bAppeared = false;
  for (const c of s) {
    if (c === 'b') bAppeared = true;
    else if (bAppeared) return false;
  }

  return true;
};