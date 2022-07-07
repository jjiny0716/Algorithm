/**
 * @param {number[]} changed
 * @return {number[]}
 */
var findOriginalArray = function(changed) {
  changed.sort((a, b) => a - b);
  const map = {};
  const result = [];

  for (let element of changed) {
    if (map[element / 2]) {
      map[element / 2]--;
      result.push(element / 2);
    }
    else map[element] = (map[element] || 0) + 1;
  }

  return result.length === changed.length / 2 ? result : [];
};

const changed = [1, 1, 1, 2, 2, 2];
console.log(findOriginalArray(changed));