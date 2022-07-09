/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var swapNodes = function(head, k) {
  const nodeArr = [];
  for (let p = head ; p !== null ; p = p.next) {
    nodeArr.push(p);
  }

  [nodeArr[k - 1], nodeArr[nodeArr.length - k]] = [nodeArr[nodeArr.length - k], nodeArr[k - 1]];

  return head;
};