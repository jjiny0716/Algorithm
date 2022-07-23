/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// stack overflow..(from recursion)
var validPath = function(n, edges, source, destination) {
  const adj = Array.from({ length: n }, () => []);
  for (const [s, e] of edges) {
    adj[s].push(e);
    adj[e].push(s);
  }

  const visited = new Set();
  function dfs(here) {
    if (visited.has(here)) return;

    visited.add(here);

    for (const there of adj[here]) {
      dfs(there);
    }
  }
  dfs(source);

  return visited.has(destination);
};

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
// iterative dfs
var validPath = function(n, edges, source, destination) {
  const adj = Array.from({ length: n }, () => []);
  for (const [s, e] of edges) {
    adj[s].push(e);
    adj[e].push(s);
  }

  const visited = new Set();
  const stack = [source];
  // iterative dfs
  while (stack.length) {
    const here = stack.pop();
    if (visited.has(here)) continue;
    visited.add(here);
    stack.push(...adj[here]);
  }

  return visited.has(destination);
};


const n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2;
console.log(validPath(n, edges, source, destination));