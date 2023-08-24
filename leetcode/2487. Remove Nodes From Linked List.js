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
var removeNodes = function(head) {
  const stack = [];
  for (let p = head ; p !== null ; p = p.next) {
    while (stack.length && (stack.at(-1).val < p.val)) {
      stack.pop();
    }
    stack.push(p);
  }

  for (let i = 1 ; i < stack.length ; i++) {
    stack[i - 1].next = stack[i];
  }

  return stack[0];
};