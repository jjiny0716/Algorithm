/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function (head, parent = null, next = null) {
  let node = head;
  while (node.next !== null) {
    if (node.child !== null) flatten(node.child, node, node.next);
    node = node.next
  }
  if (node.child !== null) flatten(node.child, node, next);
  if (parent !== null) {
    parent.next = head;
    head.prev = parent
    parent.child = null;
  }
  if (next !== null) {
    node.next = next;
    next.prev = node;
  }
  return head;
};


// other
// 그냥 순회하기. 레벨1씩 평탄화한다고 보면 될듯.
// class Solution {
//   public Node flatten(Node head) {
//       if( head == null) return head;
// // Pointer
//       Node p = head; 
//       while( p!= null) {
//           /* CASE 1: if no child, proceed */
//           if( p.child == null ) {
//               p = p.next;
//               continue;
//           }
//           /* CASE 2: got child, find the tail of the child and link it to p.next */
//           Node temp = p.child;
//           // Find the tail of the child
//           while( temp.next != null ) 
//               temp = temp.next;
//           // Connect tail with p.next, if it is not null
//           temp.next = p.next;  
//           if( p.next != null )  p.next.prev = temp;
//           // Connect p with p.child, and remove p.child
//           p.next = p.child; 
//           p.child.prev = p;
//           p.child = null;
//       }
//       return head;
//   }
// }