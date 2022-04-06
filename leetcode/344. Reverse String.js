/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 배열 메소드
var reverseString = function (s) {
  return s.reverse();
};

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
// 투 포인터
var reverseString = function (s) {
  const n = s.length;
  for (let i = 0, j = n - 1 ; i < n / 2 ; i++, j--) {
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s
};