/**
 * @param {number[]} stones
 * @return {number}
 */
var stoneGameVII = function (stones) {
  const dp = Array.from(
    { length: stones.length + 1 },
    () => new Array(stones.length + 1)
  );
  const total = stones.reduce((prev, cur) => prev + cur);

  const helper = (i, j, curSum, alice = true) => {
    if (i > j) return 0;

    const left = stones[i];
    const right = stones[j];
    return Math.min(
      (alice ? left : -left) + helper(i + 1, j, curSum - left, !alice),
      (alice ? right : -right) + helper(i, j - 1, curSum - right, !alice)
    );
  };
  return helper(0, 1, total);
};

const stones = [5, 3, 1, 4, 2];
console.log(stoneGameVII(stones));

// 10, 8
// 13, 8
