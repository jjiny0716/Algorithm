/**
 * @param {number[]} arr
 * @return {number}
 */
var minSetSize = function (arr) {
  const map = {};
  for (let i of arr) {
    map[i] = (map[i] || 0) + 1;
  }
  const counts = Object.values(map).sort((a, b) => b - a);
  let size = arr.length;
  for (let i = 0 ; i < counts.length ; i++) {
    size -= counts[i];
    if (size <= arr.length / 2) return i + 1;
  }
};

const arr = [1,1];
console.log(minSetSize(arr));