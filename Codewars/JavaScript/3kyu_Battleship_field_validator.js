const direction = [
  [0, -1],
  [1, -1],
  [1, 0],
  [1, 1],
  [0, 1],
  [-1, 1],
  [-1, 0],
  [-1, -1],
];
let flag = false;
let size = 0;
function check(y, x, field) {
  if (x < 0 || y < 0 || x > 9 || y > 9 || field[y][x] === 0) return 0;
  for (let i = 1; i < 8; i += 2) {
    const diagonalY = y + direction[i][1]
    const diagonalX = x + direction[i][0]
    if (diagonalX < 0 || diagonalY < 0 || diagonalX > 9 || diagonalY > 9) continue;
    if (field[diagonalY][diagonalX] == 1) {
      flag = true;
      return 0;
    }
  }
  let sum = 1;
  field[y][x] = 0;
  for (let i = 0; i < 8; i += 2) {
    sum += check(y + direction[i][1], x + direction[i][0], field);
  }
  return sum;
}

function validateBattlefield(field) {
  const ships = [0, 0, 0, 0];
  for (let y = 0 ; y < 10 ; y++) {
    for (let x = 0 ; x < 10 ; x++) {
      const size = check(y, x, field) - 1;
      if (size >= 0 && size < 4) ships[size]++;
      if (flag) return false;
    }
  }
  
  return ships.join('') == "4321";
}

console.log(
  validateBattlefield([
    [1, 0, 0, 0, 0, 1, 1, 0, 0, 0],
    [1, 0, 1, 0, 0, 0, 0, 0, 1, 0],
    [1, 0, 1, 0, 1, 1, 1, 0, 1, 0],
    [1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
    [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  ])
);


// others 
function validateBattlefield2(field) {
  var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
  for (var ships = [10,0,0,0,0], row = 0; row < 10; row++) {
    for (var col = 0; col < 10; col++) {
      if ( hit(row,col) ) {
        if ( hit(row-1, col-1) || hit(row-1, col+1) ) return false; // Corner is touching
        if ( hit(row-1, col  ) && hit(row  , col-1) ) return false; // Side is touching
        if ( ( field[row][col] += hit(row-1, col) + hit(row, col-1) ) > 4 ) return false; // Ship is too long
        ships[field[row][col]]++; ships[field[row][col] - 1]--;
  } } }
  return [0,4,3,2,1].every((s,i) => s == ships[i]);
}