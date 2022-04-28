/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) { 
  const n = Math.min(matrix.length, matrix[0].length);
  let coords = [];

  for (let y = 0 ; y < matrix.length ; y++) {
    for (let x = 0 ; x < matrix[0].length ; x++) {
      if (matrix[y][x] === "1") coords.push([y, x]);
    }
  }

  let size = 1;
  for (size = 1 ; size <= n ; size++) {
    console.log("size: " + size);
    coords = coords.filter((coord) => {
      console.log("filter");
      for (let y = coord[0] ; y < coord[0] + size ; y++) {
        for (let x = coord[1] ; x < coord[1] + size ; x++) {
          console.log(y, x);
          if (matrix[y] === undefined || matrix[y][x] === undefined) return false;
          if (matrix[y][x] === "0") return false;
        }
      }
      return true;
    })
    if (coords.length === 0) break;
  }
  
  return (size - 1) * (size - 1);
};

console.log(maximalSquare([["1", "1", "1"], ["1", "1", "1"], ["1", "1", "1"]]));
