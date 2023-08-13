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
var doubleIt = function(head) {
  let p = head, prev = null;
  for (p = head ; p !== null ; p = p.next) {
    const nextValue = p.val * 2;
    const first = Math.floor(nextValue / 10);
    const second = nextValue % 10;
    if (first !== 0) {
      if (prev === null) {
        const node = new ListNode(first, p);
        head = node;
      }
      else {
        prev.val += first;
      }
    }

    p.val = second;
    prev = p;
  }

  return head;
};

