/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function (queens, king) {
  const BOARD_SIZE = 8;
  const directions = [
    [-1, 0],
    [-1, 1],
    [0, 1],
    [1, 1],
    [1, 0],
    [1, -1],
    [0, -1],
    [-1, -1],
  ]
  function buildBoard(queens, king) {
    const board = Array.from({length: BOARD_SIZE}, () => Array.from({length: BOARD_SIZE}, () => ''));
    for (let [y, x] of queens) board[y][x] = 'Q';
    board[king[0]][king[1]] = 'K';
    return board;
  }

  function checkAttack(board, y, x, directions) {
    const coords = [];
    for (let d = 0 ; d < directions.length ; d++) {
      coords.push([y + directions[d][0], x + directions[d][1]]);
    }

    while (coords.some(value => value)) {
      for (let d = 0 ; d < directions.length ; d++) {
        const coord = coords[d];
        if (!coord) continue;
        const [y, x] = coord;  
        if (y < 0 || x < 0 || y >= BOARD_SIZE || x >= BOARD_SIZE || board[y][x] === 'Q') {
          coords[d] = null;
          continue;
        }
        if (board[y][x] === 'K') return true;
        coords[d][0] += directions[d][0];
        coords[d][1] += directions[d][1];
      }
    }
    return false;
  }

  const result = [];
  const board = buildBoard(queens, king);
  for (let y = 0 ; y < BOARD_SIZE ; y++) {
    for (let x = 0 ; x < BOARD_SIZE ; x++) {
      console.log(y, x);
      if (board[y][x] === 'Q') {
        if (checkAttack(board, y, x, directions)) result.push([y, x]);
      }
    }
  }

  return result;
};

const queens = [[5,6],[7,7],[2,1],[0,7],[1,6],[5,1],[3,7],[0,3],[4,0],[1,2],[6,3],[5,0],[0,4],[2,2],[1,1],[6,4],[5,4],[0,0],[2,6],[4,5],[5,2],[1,4],[7,5],[2,3],[0,5],[4,2],[1,0],[2,7],[0,1],[4,6],[6,1],[0,6],[4,3],[1,7]], king = [3,4];
console.log(queensAttacktheKing(queens, king));

// 역발상 queen -> king  vs  king -> queen
// https://leetcode.com/problems/queens-that-can-attack-the-king/discuss/403669/Python-Check-8-steps-in-8-Directions