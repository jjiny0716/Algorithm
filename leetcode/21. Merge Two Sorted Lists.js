/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  let head = null;
  let last = null;

  while (list1 !== null || list2 !== null) {
    const newNode = new ListNode();
    if (head === null) head = newNode;
    if ((list1 !== null) && (list2 === null || list1.val <= list2.val)) {
      newNode.val = list1.val;
      list1 = list1.next;
    }
    else if ((list2 !== null) && (list1 === null || list2.val < list1.val)) {
      newNode.val = list2.val;
      list2 = list2.next;
    }
    if (last !== null) last.next = newNode;
    last = newNode;
  }

  return head;
};
