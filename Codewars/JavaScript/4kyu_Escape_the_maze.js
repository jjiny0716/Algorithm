let board;
let path = [];
const directions = [
  [0, 1],
  [1, 0],
  [0, -1],
  [-1, 0],
];

const direction = {
  '>': 0,
  'v': 1,
  '<': 2,
  '^': 3,
};

String.prototype.replaceAt = function(index, replacement) {
  return this.substr(0, index) + replacement + this.substr(index + replacement.length);
};

function getPath(y, x, py, px, currentPath) {
  if (board[y][x] == "#") return;
  if (y == 0 || x == 0 || y == board.length - 1 || x == board[0].length - 1) {
    newPath = [...currentPath, [y, x]];
    if (!path.length) path = newPath;
    if (newPath.length < path) path = newPath;
    return;
  }

  currentPath.push([y, x]);
  const char = board[y][x];
  board[y] = board[y].replaceAt(x, '#');
  for (let d = 0; d < 4; d++) {
    const ny = y + directions[d][0];
    const nx = x + directions[d][1];
    //if (ny == py && nx == px) continue;
    //if (currentPath.includes([ny, nx])) continue;

    getPath(ny, nx, y, x, currentPath);
  }
  currentPath.pop();
  board[y] = board[y].replaceAt(x, char);

  return;
}

function escape(maze) {
  board = maze;
  for (let i = 0 ; i < board.length * board[0].length ; i++) {
    const y = Math.trunc(i / board[0].length);
    const x = i % board[0].length; 
      if (board[y][x] == '>' || board[y][x] == 'v' || board[y][x] == '<' || board[y][x] == '^') {
        getPath(y, x, -1, -1, []);
        break;
    }
  }

  const result = [];
  let y = path[0][0], x = path[0][1];
  let d = direction[board[y][x]];
  path.splice(0, 1);

  while (path.length) {
    const ny = y + directions[d][0];
    const nx = x + directions[d][1];
    if (path[0][0] == ny && path[0][1] == nx) {
      y = ny;
      x = nx;
      result.push('F');
      path.shift();
    }
    else {
      d = (d + 1) % 4;
      result.push('R');
    }
  }

  return result;
}

console.log(escape([
  '# #',
  ' > ',
  '# #'
]));

console.log(escape([
  '# ########',
  '#       >#',
  '##########'
]));

console.log(escape([
  '##########',
  '#        #',
  '#  ##### #',
  '#  #   # #',
  '#  #^# # #',
  '#  ### # #',
  '#      # #',
  '######## #'
]));

console.log(
  escape([
    "#########################################",
    "#<    #       #     #         # #   #   #",
    "##### # ##### # ### # # ##### # # # ### #",
    "# #   #   #   #   #   # #     #   #   # #",
    "# # # ### # ########### # ####### # # # #",
    "#   #   # # #       #   # #   #   # #   #",
    "####### # # # ##### # ### # # # #########",
    "#   #     # #     # #   #   # # #       #",
    "# # ####### ### ### ##### ### # ####### #",
    "# #             #   #     #   #   #   # #",
    "# ############### ### ##### ##### # # # #",
    "#               #     #   #   #   # #   #",
    "##### ####### # ######### # # # ### #####",
    "#   # #   #   # #         # # # #       #",
    "# # # # # # ### # # ####### # # ### ### #",
    "# # #   # # #     #   #     # #     #   #",
    "# # ##### # # ####### # ##### ####### # #",
    "# #     # # # #   # # #     # #       # #",
    "# ##### ### # ### # # ##### # # ### ### #",
    "#     #     #     #   #     #   #   #    ",
    "#########################################",
  ])
);

// test

  // String.prototype.replaceAt = function(index, replacement) {
  //   return this.substr(0, index) + replacement + this.substr(index + replacement.length);
  // }

  // // console.log(path);
  // for (let pos of path) {
  //   board[pos[0]] = board[pos[0]].replaceAt(pos[1], '!');
  // }
  // console.log(board);
