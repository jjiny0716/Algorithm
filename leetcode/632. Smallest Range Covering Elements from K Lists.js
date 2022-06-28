/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var smallestRange = function (nums) {
  const k = nums.length;
  const numsMap = new Map();
  for (let i = 0; i < k; i++) {
    for (let num of nums[i]) {
      if (!numsMap.has(num)) numsMap.set(num, []);
      numsMap.get(num).push(i);
    }
  }

  const mergedNums = [...numsMap.keys()].sort((a, b) => a - b);
  const includingList = new Array(k).fill(0);
  let i = 0,
    j,
    includingListCount = 0;
  let range = [mergedNums[0], mergedNums.at(-1)];
  for (j = 0; j < mergedNums.length; j++) {
    for (let listIndex of numsMap.get(mergedNums[j])) {
      if (includingList[listIndex] === 0) includingListCount++;
      includingList[listIndex]++;
    }

    if (includingListCount === k) {
      if (mergedNums[j] - mergedNums[i] < range[1] - range[0]) {
        range = [mergedNums[i], mergedNums[j]];
      }
    }

    while (i < j && includingListCount === k) {
      for (let listIndex of numsMap.get(mergedNums[i])) {
        includingList[listIndex]--;
        if (includingList[listIndex] === 0) includingListCount--;
      }
      i++;
      if (includingListCount === k) {
        if (mergedNums[j] - mergedNums[i] < range[1] - range[0]) {
          range = [mergedNums[i], mergedNums[j]];
        }
      }
    }
  }

  return range;
};
[0, 4, 5, 9, 10, 12, 15, 18, 20, 22, 24, 26, 30];
const nums = [[1,2,3],[1,2,3],[1,2,3]];
console.log(smallestRange(nums));

[
  [0, 9, 12, 20],
  [4, 10, 15, 24, 26],
  [5, 18, 22, 30],
];
