function solution(land) {
  for (let y = 1 ; y < land.length ; y++) {
    for (let x = 0 ; x < 4 ; x++) {
      let lastMax = 0;
      for (let lastX = 0 ; lastX < 4 ; lastX++) {
        if (lastX === x) continue;
        lastMax = Math.max(lastMax, land[y - 1][lastX]);
      }
      land[y][x] += lastMax;
    }
  }
  
  return Math.max(...land[land.length - 1]);
}

const land = [
  [1, 2, 3, 5],
  [5, 6, 7, 8],
  [4, 3, 2, 1],
];
console.log(solution(land));
