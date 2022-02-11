/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
 var addTwoNumbers = function (l1, l2) {
  let sum = 0;
  let carry = 0;
  let last = null;
  let first = null;

  while (l1 !== null || l2 !== null || carry !== 0) {
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    
    sum += carry;
    carry = 0;
    if (sum >= 10) {
      sum -= 10;
      carry = 1;
    }
      
    const node = new ListNode(sum);
    if (!first) first = node; 
    if (last) last.next = node;
    last = node;
    sum = 0;
  }
    
  return first
};

