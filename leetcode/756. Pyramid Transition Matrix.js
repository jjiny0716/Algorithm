/**
 * @param {string} bottom
 * @param {string[]} allowed
 * @return {boolean}
 */
var pyramidTransition = function (bottom, allowed) {
  const pyramid = Array.from({ length: bottom.length }, (v, i) => Array.from({ length: bottom.length - i }));
  pyramid[0] = bottom.split('');

  const blockMap = {};
  for (let blocks of allowed) {
    const triangleBottom = blocks.slice(0, 2);
    if (blockMap[triangleBottom] == undefined) blockMap[triangleBottom] = [];
    blockMap[triangleBottom].push(blocks[2]);
  }

  let result = false;
  function stackBlocks(y, x) {
    if (result === true || y === pyramid.length) {
      result = true;
      return;
    }

    const triangleBottom = pyramid[y - 1][x] + pyramid[y - 1][x + 1];
    if (blockMap[triangleBottom] === undefined) return;
    const [ny, nx] = x === pyramid[y].length - 1 ? [y + 1, 0] : [y, x + 1];
    for (let block of blockMap[triangleBottom]) {
      pyramid[y][x] = block;
      stackBlocks(ny, nx);
    }
  }
  stackBlocks(1, 0);
  return result;
};

const bottom = "AAAA", allowed = ["AAB","AAC","BCD","BBE","DEF"];
console.log(pyramidTransition(bottom, allowed));

