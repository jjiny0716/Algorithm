function solution(key, lock) {
  const n = lock.length;
  const m = key.length;
  const totalSlot = (n * n) - lock.reduce((count, row) => count + row.reduce((prev, cur) => prev + cur, 0), 0);
  const tryUnlock = (key, lock) => {
    for (let sy = 1 - m ; sy < n ; sy++) {
      for (let sx = 1 - m ; sx < n ; sx++) {
        let removedSlot = 0;
        let canUnlock = true;
        for (let ky = 0 ; ky < m ; ky++) {
          for (let kx = 0 ; kx < m ; kx++) {
            const [y, x] = [sy + ky, sx + kx];
            if (y < 0 || x < 0 || y >= n || x >= n) continue;
            if (key[ky][kx] === 1 && lock[y][x] === 0) removedSlot++;
            else if (key[ky][kx] === 1 && lock[y][x] === 1) canUnlock = false; 
          }
        }

        if (!canUnlock) continue;
        if (removedSlot === totalSlot) return true;
      }
    }
    
    return false;
  };
  
  const rotateMatrix = (matrix) => {
    const n = matrix.length;
    const newMatrix = Array.from({ length: n }, () => new Array(n));
    
    for (let y = 0 ; y < n ; y++) {
      for (let x = 0 ; x < n ; x++) {
        newMatrix[x][n - y - 1] = matrix[y][x]
      }
    }

    return newMatrix;
  } 
  
  for (let i = 0 ; i < 4 ; i++) {
    if (tryUnlock(key, lock)) return true;
    key = rotateMatrix(key);
  }
  
  return false;
}

const key = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ],
  lock = [
    [1, 1, 1],
    [1, 1, 0],
    [1, 1, 1],
  ];
console.log(solution(key, lock));
