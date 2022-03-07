/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
  const dy = [0, 1, 0, -1];
  const dx = [1, 0, -1, 0];
  const width = image[0].length;
  const height = image.length;

  function fill(y, x, initialColor) {
    if (image[y] === undefined || image[y][x] === undefined) return;
    if (image[y][x] !== initialColor) return;
    image[y][x] = newColor;
    for (let d = 0 ; d < 4; d++) {
      fill(y + dy[d], x + dx[d], initialColor);
    }
  }

  fill(sr, sc, image[sr][sc]);
  return image;
};


