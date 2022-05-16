/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {
  if (nums.length === 0) return null;
  const maxIndex = num.reduce((iMax, num, i, arr) => iMax = num > arr[iMax] ? i : iMax, 0);
  return new TreeNode(nums[maxIndex], constructMaximumBinaryTree(nums.slice(0, maxIndex)), constructMaximumBinaryTree(nums.slice(maxIndex + 1, nums.length)));
};

const nums = [3,2,1,6,0,5];
console.log(constructMaximumBinaryTree(nums));