/**
 * @param {number[]} nums
 * @return {number}
 */
var minMaxGame = function(nums) {
  const cycle = (arr) => {
    return arr.reduce((result, value, i, arr) => {
      if (i % 2 === 1) return result;
      result.push((i / 2) % 2 === 0 ? Math.min(arr[i], arr[i + 1]) : Math.max(arr[i], arr[i + 1]));
      return result;
    }, []);
  }

  while (nums.length !== 1) nums = cycle(nums);
  return nums;
};

const nums = [1,3,5,2,4,8,2,2];
console.log(minMaxGame(nums));