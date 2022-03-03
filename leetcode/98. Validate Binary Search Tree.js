/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  const keys = [];

  function inorderTraverse(node) {
    if (node === null) return;
    inorderTraverse(node.left);
    keys.push(node.val);
    inorderTraverse(node.right);
  }

  inorderTraverse(root);

  for (let i = 1 ; i < keys.length ; i++) {
    if (keys[i - 1] >= keys[i]) return false;
  }

  return true;
};

// 개선
var isValidBST = function (root) {
  let last = null;
  let isValid = true;
  function inorderTraverse(node) {
    if (node === null || !isValid) return;
    inorderTraverse(node.left);
    if (last !== null && last >= node.val) isValid = false;
    last = node.val;
    inorderTraverse(node.right);
  }

  inorderTraverse(root);

  return isValid;
};

// inner function을 두지 않는 형태로 만들면 더 빨라질 수도?
