/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  const map = {};
  for (let i of arr) {
    map[i] = (map[i] || 0) + 1;
  }

  let result = -1;
  for (let [key, value] of Object.entries(map)) {
    if (Number(key) === value) {
      result = value;
    }
  }

  return result;
};

const arr = [1,2,2,3,3,3];
console.log(findLucky(arr));