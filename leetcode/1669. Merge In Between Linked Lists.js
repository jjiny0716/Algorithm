/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
  let list2Tail = null;
  for (let p = list2 ; p !== null ; p = p.next) list2Tail = p;

  let aNode = null;
  for (let p = list1, i = 0 ; p !== null ; p = p.next, i++) {
    if (i === a - 1) aNode = p;
    if (i === b + 1) list2Tail.next = p;
  }
  aNode.next = list2;

  return list1;
};