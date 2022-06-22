/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
  const set = new Set();

  for (let n of arr) {
    if (set.has(n / 2) || set.has(n * 2)) return true;
    set.add(n);
  }

  return false;
};

const arr = [-2, 0, 10, -19, 4, 6, -8];
console.log(checkIfExist(arr));
