function solution(n, computers) {
  const visited = new Set();
  const dfs = (here) => {
    if (visited.has(here)) return;
    visited.add(here);

    for (let i = 0 ; i < n ; i++) {
      if (!computers[here][i]) continue;
      dfs(i);
    }
  };

  let ans = 0;
  for (let i = 0; i < n; i++) {
    if (visited.has(i)) continue;
    dfs(i);
    ans++;
  }

  return ans;
}

const n = 4;
const computers = [
  [1, 0, 0, 0],
  [0, 1, 0, 1],
  [0, 0, 1, 0],
  [0, 1, 0, 1]
];
console.log(solution(n, computers));
