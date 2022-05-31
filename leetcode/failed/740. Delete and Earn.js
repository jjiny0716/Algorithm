/**
 * @param {number[]} nums
 * @return {number}
 */
var deleteAndEarn = function(nums) {
  const earnedSet = new Set();
  const dpMap = new Map();
  let result = 0;
  function getResult(i, point) {
    const curState = `${i} ${earnedSet.has(nums[i - 1])}`;
    if ((dpMap.get(curState) ?? 0) > point) return;
    else {
      dpMap.set(curState, point);
    }

    if (i === nums.length) {
      result = Math.max(result, point);
      return;
    }
    if (earnedSet.has(nums[i])) {
      getResult(i + 1, point + nums[i]);
    }
    else if (earnedSet.has(nums[i] - 1) || earnedSet.has(nums[i] + 1)) {
      getResult(i + 1, point);
    }
    else {
      earnedSet.add(nums[i]);
      getResult(i + 1, point + nums[i]);

      earnedSet.delete(nums[i]);
      getResult(i + 1, point);
    }
  }
  getResult(0, 0);

  return result;
};

const nums = [2,2,3,3,3,4];
console.log(deleteAndEarn(nums));
