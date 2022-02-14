const dy = [0, 1, 0, -1];
const dx = [1, 0, -1, 0];

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  let result = false;
  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board[0].length ; x++) {
      if (board[y][x] === word[0]) result = find(y, x, 1, board, word) || result;
      if (result) break;
    }
  }
  return result;
};

function find(y, x, i, board, word) {
  if (i === word.length) return true;
  
  let result = false; 
  for (let d = 0; d < 4; d++) {
    if (x + dx[d] < 0 || x + dx[d] >= board[0].length || y + dy[d] < 0 || y + dy[d] >= board.length) continue;
    if (board[y + dy[d]][x + dx[d]] === word[i]) {
      const origin = board[y][x];
      board[y][x] = "#"
      result = result || find(y + dy[d], x + dx[d], i + 1, board, word);
      board[y][x] = origin;
    }
  }
  
  return result;
}

const board = [["b"],["a"],["b"],["b"],["a"]];
const word = "baa";

console.log(exist(board, word));
