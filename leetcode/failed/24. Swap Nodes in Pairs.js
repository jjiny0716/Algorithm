/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  let node = new ListNode(0, head);
  head = node;
  while (node.next !== null) {
    const nnNode = node.next.next;
    node.next.next = node.next.next.next;
    nnNode.next = node.next;
    node.next = nnNode;
    node = nnNode;
  }

  return head.next;
};
