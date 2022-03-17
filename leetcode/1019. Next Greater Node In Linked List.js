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
var nextLargerNodes = function (head) {
  const result = [];
  const stack = [];

  for (let node = head, i = 0; node !== null; node = node.next, i++) {
    if (stack.length !== 0 && node.val > stack[stack.length - 1][0]) {
      for (let stackIdx = stack.length - 1; stackIdx >= 0; stackIdx--) {
        if (stack[stackIdx][0] < node.val) {
          result[stack[stackIdx][1]] = node.val;
          stack.pop();
        } else break;
      }
    }
    stack.push([node.val, i]);
  }

  for (let [value, i] of stack) {
    result[i] = 0;
  }
  return result;
};

console.log(nextLargerNodes());

// stack의 특성을 이용해 코드를 최적화하자.
/*
 * @param {ListNode} head
 * @return {number[]}
 */
var nextLargerNodes = function (head) {
  const result = [];
  const stack = [];

  for (let node = head, i = 0; node !== null; node = node.next, i++) {
    if (stack.length !== 0 && node.val > stack[stack.length - 1][0]) {
      while (stack.length !== 0 && stack[stack.length - 1][0] < node.val) {
        const [value, idx] = stack.pop();
        result[idx] = node.val;
      }
    }
    stack.push([node.val, i]);
  }

  while (stack.length) {
    const [value, idx] = stack.pop();
    result[idx] = 0;
  }
  return result;
};
