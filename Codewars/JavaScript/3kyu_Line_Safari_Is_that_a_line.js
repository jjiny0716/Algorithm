const directions = [[0, 1], [-1, 0], [0, -1], [1, 0]];

function gridTo2DArray(grid) {
  return grid;
}

function findEndPoints(board) {
  const result = [];
  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board[0].length ; x++) {
      if (board[y][x] == 'X') result.push([y, x]);
      if (result.length == 2) return result;
    }
  }

  return result;
}

function isAllPathUsed(board) {
  for (let y = 0 ; y < board.length ; y++) {
    for (let x = 0 ; x < board[0].length ; x++) {
      if (board[y][x] == '+' || board[y][x] == '-' || board[y][x] == '|') return false;
    }
  }
  
  return true;
} 

function isValidPos(y, x, board) {
  return !(y < 0 || x < 0 || y >= board.length || x >= board[0].length);
}

function findValidLine(y, x, direction, endPoint, board) {
  if (!isValidPos(y, x, board) || board[y][x] === '#') return 0;
  if (y === endPoint[0] && x === endPoint[1]) {
    return isAllPathUsed(board) ? 1 : 0;
  }

  const nextDirs = [];
  switch(board[y][x]) {
    case 'X':
      for (let i = 0 ; i < 4 ; i++) nextDirs.push(i);
      break;
    case '-':
      if (direction % 2 == 0) nextDirs.push(direction);
      else return 0;
      break;
    case '|':
      if (direction % 2 == 1) nextDirs.push(direction);
      else return 0;
      break;
    case '+': 
      nextDirs.push((direction + 1) % 4);
      nextDirs.push((direction + 3) % 4);
      break;
    default:
      return 0;
  }

  const origin = board[y][x];

  let possibleDir = 0;
  for (nextDir of nextDirs) { // ambiguous check
    const nextY = y + directions[nextDir][0];
    const nextX = x + directions[nextDir][1];
    
    if (isValidPos(nextY, nextX, board) && (board[nextY][nextX] === '#')) continue;
    if (isValidPos(nextY, nextX, board) && (board[nextY][nextX] === '+' || board[nextY][nextX] === 'X')) possibleDir++;
    if (isValidPos(nextY, nextX, board) && (board[nextY][nextX] === '-') && nextDir % 2 == 0) possibleDir++;
    if (isValidPos(nextY, nextX, board) && (board[nextY][nextX] === '|') && nextDir % 2 == 1) possibleDir++;
  }

  if (possibleDir >= 2) { // ambiguous
    return 0;
  }
  
  board[y][x] = '#';
  let count = 0;
  for (nextDir of nextDirs) {
    count += findValidLine(y + directions[nextDir][0], x + directions[nextDir][1], nextDir, endPoint, board);
  }

  board[y][x] = origin;

  return count;
}

function line(grid) {
  const board = gridTo2DArray(grid);
  const endPoints = findEndPoints(grid);

  let validLineCountFromLeft = 0;
  let validLineCountFromRight = 0;
  validLineCountFromLeft += findValidLine(endPoints[0][0], endPoints[0][1], 0, endPoints[1], board);
  validLineCountFromRight += findValidLine(endPoints[1][0], endPoints[1][1], 0, endPoints[0], board);
  
  return validLineCountFromLeft === 1 || validLineCountFromRight === 1;
}

const test = [
  "           ",
  "X---------X",
  "           ",
  "           "
  ];


console.log(line(test));

