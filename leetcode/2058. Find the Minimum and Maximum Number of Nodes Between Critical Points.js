/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var nodesBetweenCriticalPoints = function(head) {
  const criticalPoints = [];
  let minDist = Infinity;
  let lastValue = head.val;
  for (let p = head.next, i = 1 ; p.next !== null ; p = p.next, i++) {
    if ((lastValue < p.val && p.val > p.next.val) || (lastValue > p.val && p.val < p.next.val)) {
      criticalPoints.push(i);
    }

    if (criticalPoints.length >= 2) {
      minDist = Math.min(minDist, criticalPoints.at(-1) - criticalPoints.at(-2));
    }

    lastValue = p.val;
  }

  const maxDist = criticalPoints.at(-1) - criticalPoints[0];
  return criticalPoints.length >= 2 ? [minDist, maxDist] : [-1, -1];
};