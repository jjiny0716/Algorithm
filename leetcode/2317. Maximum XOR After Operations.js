/**
 * @param {number[]} nums
 * @return {number}
 */
const maximumXOR = (nums) => nums.reduce((prev, cur) => prev | cur, 0);

const nums = [1,2,3,9,2];
console.log(maximumXOR(nums));


// x AND (x XOR y)
// x y
// 0 0 = 0
// 0 1 = 0
// 1 0 = 1
// 1 1 = 0 