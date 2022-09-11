/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var pairSum = function(head) {
  const arr = [];
  for (let p = head ; p !== null ; p = p.next) arr.push(p.val);

  let result = 0;
  for (let i = 0 ; i < arr.length ; i++) result = Math.max(result, arr[i] + arr[arr.length - i - 1]);

  return result;
};