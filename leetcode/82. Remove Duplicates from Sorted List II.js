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
var deleteDuplicates = function(head) {
  let p = head;
  let lastUniqueNode = null;

  while (p !== null) {
    if (p.next === null) break;
    if (p.val !== p.next.val) {
      lastUniqueNode = p;
      p = p.next;
    }
    else {
      while (p.next && p.val === p.next.val) {
        console.log(p.val);
        p = p.next;
      }
      if (lastUniqueNode) lastUniqueNode.next = p.next;
      else head = p.next;
      p = p.next
    }
  }

  return head;
};