/**
 * @param {number} label
 * @return {number[]}
 */
var pathInZigZagTree = function(label) {
  let level = 0, powOf2 = 1;
  while (powOf2 <= label) {
    powOf2 *= 2;
    level++;
  }

  const path = [];
  while (level !== 1) {
    path.push(label);
        // index start from 1
    const siblingIndex = Math.abs(powOf2 - label - ((level % 2 === 1) ? powOf2 / 2: 1));
    const parentIndex = Math.floor(siblingIndex / 2);
    powOf2 /= 2;
    label = (level % 2 === 0) ? powOf2 / 2 + parentIndex : powOf2 - parentIndex - 1;
    level--;
  }

  path.push(1);
  return path.reverse();
};

const label = 16;
console.log(pathInZigZagTree(label));