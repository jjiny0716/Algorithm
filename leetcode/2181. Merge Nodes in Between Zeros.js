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
var mergeNodes = function (head) {
  const values = [];
  let sum = 0;
  for (let p = head.next; p !== null; p = p.next) {
    if (p.val === 0) {
      values.push(sum);
      sum = 0;
    }
    sum += p.val;
  }

  let result = null;
  let prev = null;
  for (let value of values) {
    const node = new ListNode(value, null);
    if (prev) prev.next = node;
    if (!result) result = node;
    prev = node;
  }

  return result;
};


// 개선(inplace)
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
var mergeNodes = function(head) {
  head = head.next;
  let start = head;

  while (start) {
    let end = start;
    let sum = 0;
    while (end.val !== 0) {
      sum += end.val;
      end = end.next;
    }
    start.val = sum;
    start.next = end.next;
    start = start.next;
  }

  return head;
};
