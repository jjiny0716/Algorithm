/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
  const map = {};
  for (let i of arr) {
    map[i] = (map[i] || 0) + 1;
  }
  
  const set = new Set();
  for (let count of Object.values(map)) {
    if (set.has(count)) return false;
    set.add(count);
  }

  return true;
};

const arr = [1,2,2,1,1,3];
console.log(uniqueOccurrences(arr));