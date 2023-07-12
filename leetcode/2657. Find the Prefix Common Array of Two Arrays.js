/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
var findThePrefixCommonArray = function(A, B) {
  const set = new Set();
  let commonCount = 0;
  const result = [];
  for (let i = 0 ; i < A.length ; i++) {
    set.has(A[i]) ? commonCount++ : set.add(A[i]);
    set.has(B[i]) ? commonCount++ : set.add(B[i]);
    result.push(commonCount);
  }

  return result;
};