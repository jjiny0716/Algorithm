/**
 * @param {string} target
 * @return {string}
 */
var alphabetBoardPath = function (target) {
  const map = {};
  for (let i = 0 ; i < 26 ; i++) {
    const y = Math.floor(i / 5);
    const x = i - y * 5;
    map[String.fromCharCode('a'.charCodeAt(0) + i)] = [x, y];
  }

  let x = 0, y = 0;
  let result = "";
  for (let i = 0 ; i < target.length ; i++) {
    const [targetX, targetY] = map[target[i]];
    const [xDiff, yDiff] = [targetX - x, targetY - y];
    if (yDiff < 0) result += 'U'.repeat(Math.abs(yDiff));
    if (xDiff > 0) result += 'R'.repeat(Math.abs(xDiff));
    if (xDiff < 0) result += 'L'.repeat(Math.abs(xDiff));
    if (yDiff > 0) result += 'D'.repeat(Math.abs(yDiff));
    result += '!';
    [x, y] = [targetX, targetY];
  }

  return result;
};


const target = "bz";
console.log(alphabetBoardPath(target));