function check(board, word, y, x, index) {
  if (y < 0 || x < 0 || y > board.length - 1 || x > board.length - 1) return false;
  if (board[y][x] != word[index]) return false;

  if (index == word.length - 1) return true;
  board[y][x] = "?";

  let result = false;
  for (let dy = -1 ; dy < 2 ; dy++) {
    for (let dx = -1 ; dx < 2 ; dx++) {
      if (dy == 0 && dx == 0) continue;
      result = result || check(board, word, y + dy, x + dx, index + 1);
    }
  }  

  board[y][x] = word[index];
  return result;
}

function checkWord(board, word) {
  let result = false;
  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board.length ; x++) {
      result = result || check(board, word, y, x, 0);
    }
  }

  return result;
}

const testBoard = [
  ["E","A","R","A"],
  ["N","L","E","C"],
  ["I","A","I","S"],
  ["B","Y","O","R"]
];

console.log(checkWord(testBoard, "EAR"));