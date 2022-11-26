/**
 * @param {number[]} pref
 * @return {number[]}
 */
var findArray = function(pref) {
  return pref.map((n, i) => n ^ (pref[i - 1] ?? 0));
};

const pref = [5,2,0,3,1];
console.log(findArray(pref));