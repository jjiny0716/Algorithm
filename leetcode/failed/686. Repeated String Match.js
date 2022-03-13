/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var repeatedStringMatch = function (a, b) {
  if (a.length >= b.length) {
    const idx = (a + a).indexOf(b);
    if (idx === -1) return -1;
    if (idx + b.length > a.length) return 2;
    return 1;
  }
  const removed = b.split(a);
  if (removed.filter(str => str !== '').length > 2) return -1;
  const head = removed[0], tail = removed[removed.length - 1];
  if (a.slice(a.length - head.length, a.length) !== head) return -1;
  if (a.slice(0, tail.length) !== tail) return -1;
  return (b.length - head.length - tail.length) / a.length + (head.length ? 1 : 0) + (tail.length ? 1 : 0);
};

a = "abcd", b = "bcdab";
console.log(repeatedStringMatch(a, b));
