/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
 var searchMatrix = function (matrix, target) {
  const height = matrix.length;
  const width = matrix[0].length;
  let left = 0;
  let right = width * height - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const y = Math.floor(mid / width);
    const x = mid % width;
    if (target > matrix[y][x]) left = mid + 1;
    else if (target < matrix[y][x]) right = mid - 1;
    else return true;
  }

  return false;
};
