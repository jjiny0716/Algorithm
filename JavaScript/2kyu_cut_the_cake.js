let cakeBoard = [];
let pieceShapes = [];
let raisins = 0;
let pieces = [];
let result = [];

function cutPiece(y, x) {
  for (let shape of pieceShapes) {
    if (pieces.length === raisins) {
      result = [...pieces];
      return;
    }
    const h = shape[0];
    const w = shape[1];
    let raisinPos = [];
    let raisinCount = 0;

    if (y + h > cakeBoard.length || x + w > cakeBoard[0].length) continue;

    let overSize = false;
    for (let ny = y ; ny < y + h ; ny++) {
      for (let nx = x ; nx < x + w ; nx++) {
        if (cakeBoard[ny][nx] == 'x') overSize= true;  
        if (cakeBoard[ny][nx] == 'o') {
          raisinPos = [ny, nx];
          raisinCount++;
        }
      }
    }

    if (raisinCount != 1 || overSize) continue;

    pieces.push([y, x, h, w]);
    for (let ny = y ; ny < y + h ; ny++) {
      for (let nx = x ; nx < x + w ; nx++) {
        cakeBoard[ny][nx] = "x";
      }
    }
    
    let nextY = 0;
    let nextX = 0;
    for (let ny = 0 ; ny < cakeBoard.length ; ny++) {
      let found = false;
      for (let nx = 0 ; nx < cakeBoard[0].length ; nx++) {
        if (cakeBoard[ny][nx] == '.' || cakeBoard[ny][nx] == 'o') {
          nextY = ny;
          nextX = nx;
          found = true;
          break;
        }
      }
      if (found) break;
    }

    cutPiece(nextY, nextX);
    pieces.pop();
    for (let ny = y ; ny < y + h ; ny++) {
      for (let nx = x ; nx < x + w ; nx++) {
        cakeBoard[ny][nx] = ".";
        if (ny == raisinPos[0] && nx == raisinPos[1]) cakeBoard[ny][nx] = "o";
      }
    }
  }
}



function cut(cake) {
  cakeBoard = [];
  pieceShapes = [];
  raisins = 0;
  pieces = [];
  result = [];
  
  const width = cake.indexOf('\n');
  const height= (cake.length + 1) / (width + 1);

  for (let y = 0 ; y < height ; y++) {
    const row = [];
    for (let x = 0 ; x < width ; x++) {
      if (cake[y * (width + 1) + x] == 'o') raisins++;
      row.push(cake[y * (width + 1) + x]);
    }
    cakeBoard.push(row);
  }

  const pieceSize = (width * height) / raisins;
  for (let h = pieceSize ; h >= 0 ; h--) {
    const w = pieceSize / h;
    if (Number.isInteger(h) && Number.isInteger(w) && h <= cakeBoard.length && w <= cakeBoard[0].length)
      pieceShapes.push([h, w]);
  } 

  cutPiece(0, 0);

  const answer = [];
  for (let pieceInfo of result) {
    let piece = [];
    for (let y = pieceInfo[0] ; y < pieceInfo[0] + pieceInfo[2] ; y++) {
      const row = [];
      for (let x = pieceInfo[1] ; x < pieceInfo[1] + pieceInfo[3] ; x++) {
        row.push(cakeBoard[y][x]);
      }
      piece.push(row.join(''));
    }
    answer.push(piece.join("\n"));
  }
  return answer;
}

// const str = "ASD";
// str.

var cake1 = 
`.o......
......o.
....o...
..o.....`

var cake2 = `........o...............
..................o.....
........................
.................o......
.......o................
........................
.....................o..
........................
..................o.....
o...o...................`


console.log(cut(cake2));


// ........o...............
// ..................o.....
// ........................
// .................o......
// .......o................
// ........................
// .....................o..
// ........................
// ..................o.....
// o...o...................