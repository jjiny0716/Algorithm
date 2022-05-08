function solution(places) {
  const directions = [
      [0, 1],
      [1, 0],
      [0, -1],
      [-1, 0],
  ]
  
  const result = [];
  
  for (let place of places) {
      let welldone = true;
      outerLoop: for (let y = 0 ; y < 5 ; y++) {
          for (let x = 0 ; x < 5 ; x++) {
              if (place[y][x] === 'P' && isPersonInRange(y, x, place)) {
                  welldone = false;
                  break outerLoop;
              }
          }
      }
      
      result.push(welldone ? 1 : 0);
  }
  
  function isPersonInRange(startY, startX, place) {
      const visited = {};
      const queue = [[startY, startX]];
      let distance = 0;
      while (queue.length && distance < 3) {
          const len = queue.length;
          for (let i = 0 ; i < len ; i++) {
              const [y, x] = queue.shift();
              if (visited[`${y} ${x}`]) continue;
              if (!isValidPos(y, x, place)) continue;
              
              visited[`${y} ${x}`] = true;
              if (!(y === startY && x === startX) && place[y][x] === "P") return true;
              
              for (let d of directions) {
                  const [dy, dx] = d;
                  const [ny, nx] = [y + dy, x + dx];
                  if (isValidPos && !visited[`${ny} ${nx}`]) queue.push([ny, nx]);
              }
          }
          
          distance++;
      }
      
      return false;
  }
  
  function isValidPos(y, x, place) {
      return !(y < 0 || x < 0 || y >= 5 || x >= 5 || place[y][x] === 'X');
  }
  
  return result;
}