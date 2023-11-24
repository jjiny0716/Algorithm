function solution(maze) {
  const n = maze.length;
  const m = maze[0].length;
  let redStart = [-1, -1];
  let blueStart = [-1, -1];

  for (let y = 0; y < n; y++) {
    for (let x = 0; x < m; x++) {
      if (maze[y][x] === 1) redStart = [x, y];
      else if (maze[y][x] === 2) blueStart = [x, y];
    }
  }

  const redVisited = Array.from({ length: n }, () => new Array(m).fill(false));
  const blueVisited = Array.from({ length: n }, () => new Array(m).fill(false));
  redVisited[redStart[1]][redStart[0]] = true;
  blueVisited[blueStart[1]][blueStart[0]] = true;
  const directions = [
    [1, 0],
    [0, 1],
    [-1, 0],
    [0, -1],
  ]
  
  const isValidPos = (x, y) => {
    if (x < 0 || y < 0 || x >= m || y >= n) return false;
    if (maze[y][x] === 5) return false;
    return true;
  }
  const dfs = (redPos, bluePos) => {
    const [redX, redY] = redPos;
    const [blueX, blueY] = bluePos;
    if (maze[redY][redX] === 3 && maze[blueY][blueX] === 4) return 0;
    
    let turn = Infinity;
    for (let i = 0 ; i < (maze[redY][redX] === 3 ? 1 : 4) ; i++) {
      for (let j = 0 ; j < (maze[blueY][blueX] === 4 ? 1 : 4) ; j++) {
        let [redDx, redDy] = directions[i];
        let [blueDx, blueDy] = directions[j];
        if (maze[redY][redX] === 3) [redDx, redDy] = [0, 0];
        if (maze[blueY][blueX] === 4) [blueDx, blueDy] = [0, 0];
        const nextRedPos = [redX + redDx, redY + redDy];
        const nextBluePos = [blueX + blueDx, blueY + blueDy];
        
        if (!isValidPos(nextRedPos[0], nextRedPos[1]) || !isValidPos(nextBluePos[0], nextBluePos[1])) continue;
        if (nextRedPos[0] === nextBluePos[0] && nextRedPos[1] === nextBluePos[1]) continue;
        if (nextRedPos[0] === blueX && nextRedPos[1] === blueY && nextBluePos[0] === redX && nextBluePos[1] === redY) continue;
        if ((maze[nextRedPos[1]][nextRedPos[0]] !== 3 && redVisited[nextRedPos[1]][nextRedPos[0]]) || (maze[nextBluePos[1]][nextBluePos[0]] !== 4 && blueVisited[nextBluePos[1]][nextBluePos[0]])) continue;
        
        redVisited[nextRedPos[1]][nextRedPos[0]] = true;
        blueVisited[nextBluePos[1]][nextBluePos[0]] = true;
        
        turn = Math.min(turn, dfs(nextRedPos, nextBluePos));
        
        redVisited[nextRedPos[1]][nextRedPos[0]] = false;
        blueVisited[nextBluePos[1]][nextBluePos[0]] = false;
      }
    }
    
    return 1 + turn;
  }
  
  const ans = dfs(redStart, blueStart);
  return ans === Infinity ? 0 : ans;
}

const maze = [[1, 0, 2], [0, 0, 0], [5, 0 ,5], [4, 0, 3]];
console.log(solution(maze));
