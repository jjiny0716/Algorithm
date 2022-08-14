/**
 * @param {string} start
 * @param {string} target
 * @return {boolean}
 */
var canChange = function (start, target) {
  let si = findNextPiece(start, -1), ti = findNextPiece(target, -1);
  while (si !== -1 && ti !== -1) {
    if ((start[si] === "L" && target[ti] === "L" && ti <= si) || (start[si] === "R" && target[ti] === "R" && ti >= si)) {
      si = findNextPiece(start, si);
      ti = findNextPiece(target, ti);
    } else return false;
  }

  function findNextPiece(s, startIndex) {
    for (let i = startIndex + 1; i < s.length; i++) {
      if (s[i] === "L" || s[i] === "R") return i;
    }

    return -1;
  }

  return si === -1 && ti === -1;
};

const start = "_L__R__R_",
  target = "L______RR";
console.log(canChange(start, target));
