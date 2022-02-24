/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function (board) {
  // 굳이 해시테이블 안에 배열을 또 만들어서 탐색을??
  const columnMap = {"1":[], "2":[], "3":[], "4":[], "5":[], "6":[], "7":[], "8":[], "9":[]};
  const rowMap = {"1":[], "2":[], "3":[], "4":[], "5":[], "6":[], "7":[], "8":[], "9":[]};
  const subBoxMap = {"1":[], "2":[], "3":[], "4":[], "5":[], "6":[], "7":[], "8":[], "9":[]};

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === ".") continue;
      const boxNumber = Math.floor(y / 3) * 3 + Math.floor(x / 3);
      const num = board[y][x];
      let isInvalid = false;
      columnMap[num].includes(y) ? (isInvalid = true) : (columnMap[num].push(y));
      rowMap[num].includes(x) ? (isInvalid = true) : (rowMap[num].push(x));
      subBoxMap[num].includes(boxNumber) ? (isInvalid = true) : (subBoxMap[num].push(boxNumber));

      if (isInvalid) return false;
    }
  }

  return true;
};

board = [
  [".", "1", ".", "5", "2", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", "6", "4", "3", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
  ["5", ".", ".", ".", ".", ".", "9", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", "5", "."],
  [".", ".", ".", "5", ".", ".", ".", ".", "."],
  ["9", ".", ".", ".", ".", "3", ".", ".", "."],
  [".", ".", "6", ".", ".", ".", ".", ".", "."],
  [".", ".", ".", ".", ".", ".", ".", ".", "."],
];

console.log(isValidSudoku(board));

// 개선.
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku2 = function (board) {
  const columnMap = {};
  const rowMap = {};
  const subBoxMap = {};

  for (let y = 0; y < 9; y++) {
    for (let x = 0; x < 9; x++) {
      if (board[y][x] === ".") continue;
      const boxNumber = Math.floor(y / 3) * 3 + Math.floor(x / 3);
      const num = board[y][x];
      let isInvalid = false;
      columnMap[num + y] ? (isInvalid = true) : (columnMap[num + y] = true);
      rowMap[num + x] ? (isInvalid = true) : (rowMap[num + x] = true);
      subBoxMap[num + boxNumber] ? (isInvalid = true) : (subBoxMap[num + boxNumber] = true);

      if (isInvalid) return false;
    }
  }

  return true;
};

console.log(isValidSudoku2(board));