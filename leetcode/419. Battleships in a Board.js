/**
 * @param {character[][]} board
 * @return {number}
 */
var countBattleships = function (board) {
  let count = 0;

  function remove(y, x) {
    if (board[y] === undefined || board[y][x] === undefined || board[y][x] === ".") return;
    board[y][x] = ".";
    remove(y + 1, x);
    remove(y, x + 1);
  }

  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board[0].length ; x++) {
      if (board[y][x] === "X") {
        count++;
        remove(y, x);
      }
    }
  }

  return count;
};

board = [["X",".",".","X"],[".",".",".","X"],[".",".",".","X"]];
console.log(countBattleships(board));