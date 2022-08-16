/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
  const stringSet = new Set();
  const distinctSet = new Set();
  for (const s of arr) {
    if (!stringSet.has(s)) {
      stringSet.add(s);
      distinctSet.add(s);
    }
    else distinctSet.delete(s);
  }

  return [...distinctSet][k - 1] || "";
};

const  arr = ["d","b","c","b","c","a"], k = 2;
console.log(kthDistinct(arr, k));