/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// sort O(nlog(n))
var getAllElements = function (root1, root2) {
  const arr = [];
  function traverse(node, arr) {
    if (node === null) return;
    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
  }
  traverse(root1);
  traverse(root2);
  return arr.sort((a, b) => a - b);
};


/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {number[]}
 */
// 투 포인터 O(n + m)
var getAllElements = function (root1, root2) {
  const arr1 = [], arr2 = [];
  function traverse(node, arr) {
    if (node === null) return;
    traverse(node.left, arr);
    arr.push(node.val);
    traverse(node.right, arr);
  }
  traverse(root1, arr1);
  traverse(root2, arr2);
  const result = [];
  for (let i = 0, j = 0 ; i < arr1.length && j < arr2.length ; ) {
    if ((arr1[i] <= arr2[j]) || arr2[j] === undefined) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  return result;
}
