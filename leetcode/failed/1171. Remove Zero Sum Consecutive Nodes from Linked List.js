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
var removeZeroSumSublists = function(head) {
  const pSumNodeMap = {};
  let sum = 0;
  for (let node = head ; node !== null ; node = node.next) {
    sum += node.val;
    if (pSumNodeMap[sum] !== undefined) {
      let tempSum = sum;
      for (let tempNode = pSumNodeMap[sum] ; tempNode !== node ; tempNode = tempNode.next) {
        tempSum += tempNode.val;
        delete pSumNodeMap[tempSum];
      }
      pSumNodeMap[sum].next = node.next;
      continue;
    }
    pSumNodeMap[sum] = node;
  }

  return sum !== 0 ? head : null;
};