/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if (p === null && q === null) return true;
  else if (p === null || q === null) return false;
  else if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

// 개선
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  let result = true;
  function traverseTwoTree(p, q) {
    if (!result) return;
    if (p === null && q === null) return;
    else if (p === null || q === null) {
      result = false;
      return;
    } else if (p.val !== q.val) {
      result = false;
      return;
    }
    traverseTwoTree(p.left, q.left);
    traverseTwoTree(p.right, q.right);
  }
  traverseTwoTree(p, q);

  return result;
};
