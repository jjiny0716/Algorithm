/**
 * @param {character[][]} box
 * @return {character[][]}
 */
var rotateTheBox = function (box) {
  const m = box.length;
  const n = box[0].length;

  const result = Array.from({ length: n }, () => Array.from({ length: m }));

  for (let y = 0; y < m; y++) {
    let i = n - 1;
    for (let x = n - 1; x >= 0; x--) {
      if (box[y][x] === "*") {
        i = x - 1;
      }
      if (box[y][x] === "#") {
        box[y][x] = ".";
        box[y][i] = "#";
        i--;
      }
    }
  }

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      result[x][m - y - 1] = box[y][x];
    }
  }

  return result;
};

const box = [
  ["#", "#", "*", ".", "*", "."],
  ["#", "#", "#", "*", ".", "."],
  ["#", "#", "#", ".", "#", "."],
];
console.log(rotateTheBox(box));
