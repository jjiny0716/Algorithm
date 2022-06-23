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
var sortList = function(head) {
  const arr = [];
  for (let p = head ; p !== null ; p = p.next) {
    arr.push(p.val);
  }
  arr.sort((a, b) => a - b);

  let prev = null;
  let sortedHead = null;
  for (let val of arr) {
    const node = new ListNode(val, null);
    if (!sortedHead) sortedHead = node;
    if (prev) prev.next = node;
    prev = node;
  }

  return sortedHead;
};