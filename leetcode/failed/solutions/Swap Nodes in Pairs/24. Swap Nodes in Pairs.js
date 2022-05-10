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
var swapPairs = function(head) {
  if (!head) return head;
  const root = head.next ?? head;
  let pointer = head;
  let lastNode = null;

  while (pointer && pointer.next) {
    const nextNode = pointer.next;
    pointer.next = nextNode.next;
    nextNode.next = pointer;
    if (lastNode) {
      lastNode.next = nextNode;
    }
    
    lastNode = pointer;
    pointer = pointer.next;
  }

  return root;
};

// 2 1 3