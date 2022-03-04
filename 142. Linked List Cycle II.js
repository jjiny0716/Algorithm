/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  let node = head;
  const nodeMap = new Map();
  while (node !== null) {
    if (nodeMap.get(node)) return node;
    nodeMap.set(node, true);
    node = node.next;
  }

  return null
};
