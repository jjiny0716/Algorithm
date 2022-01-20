// 2022 01 19
const directions = [[0, 1],[1, 0],[0, -1],[-1, 0]];
const dirChar = ["R", "D", "L", "U"];
let resultPath = null;

function move(poss, hole, board, path) {
  if (resultPath && path.length >= resultPath.length) return;
  console.log(poss.length + " " + hole[0] + " " + hole[1]);
  if (poss.length == 1 && poss[0][0] == hole[0] && poss[0][1] == hole[1])  {
    resultPath = [...path];
  }

  console.log(poss);
  console.log(path.join(''));
  print(board);

  for (let i = 0 ; i < 4 ; i++) {
    let newPoss = [];
    for (let pos of poss) {
      const ny = pos[0] + directions[i][0];
      const nx = pos[1] + directions[i][1];
      newPoss.push([ny, nx]);
      if (poss.length == 1) newPoss.push([ny + directions[i][0], nx + directions[i][1]]);
    }

    //console.log(poss);
    for (let i = 0 ; i < poss.length ; i++) {
      for (let j = 0 ; j < newPoss.length ; j++) {
        if (JSON.stringify(poss[i]) === JSON.stringify(newPoss[j])) {
          newPoss.splice(j, 1);
          break;
        }
      }
    }

    if (!possCheck(newPoss, board)) continue;

    path.push(dirChar[i]);
    const origin = change(poss, board, "0");

    move(newPoss, hole, board, path);

    path.pop();
    restore(poss, board, origin);
  } 
}

function change(poss, board, char) {
  const origin = [];
  if (char == "0") {
    let type = "?";
    if (poss.length == 1) type = "A";
    else if (poss[0][0] == poss[1][0]) type = "B";
    else for (let pos of poss) type = "C"; 
    for (let pos of poss) {
      origin.push(board[pos[0]][pos[1]]);
      board[pos[0]][pos[1]] = type;
    }
  }
  else for (let pos of poss) board[pos[0]][pos[1]] = char;

  return origin;
}

function restore(poss, board, chars) {
  for (let i = 0 ; i < poss.length ; i++) {
    board[poss[i][0]][poss[i][1]] = chars[i];
  }
}


function possCheck(poss, board) {
  //console.log(poss);
  for (let pos of poss) {
    if (pos[0] < 0 || pos[1] < 0 || pos[0] >= board.length || pos[1] >= board[0].length) return false;
  }
  let type = "?";
  if (poss.length == 1) type = "A";
  else if (poss[0][0] == poss[1][0]) type = "B";
  else for (let pos of poss) type = "C";

  if (poss.every((pos) => board[pos[0]][pos[1]] == type)) return false;
  if (poss.some((pos) => board[pos[0]][pos[1]] == "0")) return false;
  return true;
}

function bloxSolver(arr) {
  const board = arr.map((row) => row.split(''));
  print(board);

  const path = [];
  move([findChar(board, "B")], findChar(board, "X"), board, path);

  return resultPath.join('');
}

function findChar(board, target) {
  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board[0].length ; x++) {
      if (board[y][x] === target) {
        return [y, x];
      }
    }
  }
}

function print(board) {
  for (let row of board) {
    console.log(row.join(''));
  }
}


const test = 
	['1110000000',
	 '1B11110000',
	 '1111111110',
	 '0111111111',
	 '0000011X11',
	 '0000001110']

const test2 = ['000000111111100',
'111100111001100',
'111111111001111',
'1B11000000011X1',
'111100000001111',
'000000000000111'];

console.log(bloxSolver(test2));
