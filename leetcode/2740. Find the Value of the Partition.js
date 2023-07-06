/**
 * @param {number[]} nums
 * @return {number}
 */
var findValueOfPartition = function (nums) {
  return Math.min(
    ...nums
      .sort((a, b) => a - b)
      .reduce((prev, cur, index, arr) => {
        if (index === arr.length - 1) return prev;
        prev.push(arr[index + 1] - cur);
        return prev;
      }, [])
  );
};
