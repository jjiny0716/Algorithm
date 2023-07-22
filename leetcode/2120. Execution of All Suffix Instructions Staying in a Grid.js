/**
 * @param {number} n
 * @param {number[]} startPos
 * @param {string} s
 * @return {number[]}
 */
var executeInstructions = function(n, startPos, s) {
  const directionMap = {
    R: [0, 1],
    D: [1, 0],
    L: [0, -1],
    U: [-1, 0],
  }

  const getMovementCount = (startInstructionIndex) => {
    let count = 0;
    let [y, x] = startPos;
    for (let i = startInstructionIndex ; i < s.length ; i++) {
      const [dy, dx] = directionMap[s[i]];
      x += dx;
      y += dy;
      if (x < 0 || y < 0 || x >= n || y >= n) break;
      count++;
    }

    return count;
  }

  const result = [];
  for (let i = 0 ; i < s.length ; i++) {
    result.push(getMovementCount(i));
  }

  return result;
};

const n = 3, startPos = [0,1], s = "RRDDLU";
console.log(executeInstructions(n, startPos, s));