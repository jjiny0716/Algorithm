function solution(info, edges) {
  const n = info.length;
  const count = [1, 0];
  const visited = new Array(n).fill(false);
  visited[0] = true;
  let maxSheep = 0;
  
  const completeSearch = () => {
    if (count[0] <= count[1]) return;
    maxSheep = Math.max(maxSheep, count[0]);
    
    for (const [s, e] of edges) {
      if (visited[s] && !visited[e]) {
        visited[e] = true;
        count[info[e]]++;
        completeSearch();
        visited[e] = false;
        count[info[e]]--;
      }
    }
  }
  completeSearch();
  
  return maxSheep;
}

const info = [0,1,0,1,1,0,1,0,0,1,0], edges = [[0,1],[0,2],[1,3],[1,4],[2,5],[2,6],[3,7],[4,8],[6,9],[9,10]];
console.log(solution(info, edges));
