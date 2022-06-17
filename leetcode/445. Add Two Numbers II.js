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
// 오버플로우남
 var addTwoNumbers = function(l1, l2) {
  let num1 = 0, num2 = 0;

  for (let p = l1 ; p !== null ; p = p.next) {
    num1 *= 10;
    num1 += p.val; 
  }

  for (let p = l2 ; p !== null ; p = p.next) {
    num2 *= 10;
    num2 += p.val; 
  }
  if (num1 + num2 === 0) return new ListNode(0, null);

  let resultNum = num1 + num2;
  let next = null;
  while (resultNum) {
    const node = new ListNode(resultNum % 10, next);
    next = node;
    resultNum = Math.floor(resultNum / 10);
  }

  return next;
};


/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  const values1 = [], values2 = [];
  for (let p = l1 ; l1 !== null ; p = p.next) values1.push(p.val);
  for (let p = l2 ; l2 !== null ; p = p.next) values2.push(p.val);
  values1.reverse();
  values2.reverse();

  const result = [];
  let carry = 0;
  for (let i = 0 ; i < Math.max(values1.length, values2.length) ; i++) {
    let value = (values1[i] || 0) + (values2[i] || 0) + carry;
    if (value >= 10) {
      carry = 1;
      value = value % 10;
    }
    else carry = 0;

    result.push(value);
  }
  if (carry) result.push(carry);

  let next = null;
  for (let i = 0 ; i < result.length ; i++) {
    const node = new ListNode(result[i], next);
    next = node;
  }

  return next;
};