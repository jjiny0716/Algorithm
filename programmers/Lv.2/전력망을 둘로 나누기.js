function solution(n, wires) {
  const adj = Array.from({ length: n + 1 }, () => []);
  for (const [v1, v2] of wires) {
    adj[v1].push(v2);
    adj[v2].push(v1);
  }

  const visited = new Set();
  const counts = [];
  const dfs = (here) => {
    if (visited.has(here)) return 0;
    
    let c = 1;
    visited.add(here);

    for (const there of adj[here]) c += dfs(there);
    counts.push(c);
    return c;
  }
  dfs(1);
  
  let ans = Infinity;
  for (const c of counts) {
    ans = Math.min(ans, Math.abs(n - c * 2));
  }
  
  return ans;
}

const n = 9, wires = 	[[1,3],[2,3],[3,4],[4,5],[4,6],[4,7],[7,8],[7,9]];
console.log(solution(n, wires));