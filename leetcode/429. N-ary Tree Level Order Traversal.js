/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
  var levelOrder = function (root) {
  if (!root) return [];
  const result = [];
  
  function traverse(node, level) {
    if (!node) return;

    if (!result[level]) result[level] = [];
    result[level].push(node.val);

    for (let childNode of node.children) {
      traverse(childNode, level + 1);
    }
  }

  traverse(root, 0);
  return result;
};
