/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const result = [];
  const m = new Map();

  makeSubsets(nums, m, result);
  return result;
};

function makeSubsets(cur, m, result) {
  if (!m.get(cur.toString())) {
    result.push([...cur]);
    m.set(cur.toString(), true);
  }

  for (let i = 0 ; i < cur.length ; i++) {
    const next = cur.filter((v, idx) => idx !== i);
    makeSubsets(next, m, result);
  }
}

console.log(subsets([1, 2, 2]));
