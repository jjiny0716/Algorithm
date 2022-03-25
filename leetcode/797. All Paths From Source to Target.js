/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const visited = Array.from({ length: n }, () => false);
  const result = [];

  function dfs(here, path) {
    if (path.length === n - 1) {
      result.push([...path, here]);
      return;
    }
    visited[here] = true;
    path.push(here);
    for (let there of graph[here]) {
      dfs(there, path);
    }
    visited[here] = false;
    path.pop();
  }
  dfs(0, []);
  return result;
};

// 그래프가 DAG이므로 visited를 쓸 필요 없었음.
/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function (graph) {
  const n = graph.length;
  const result = [];

  function dfs(here, path) {
    if (here === n - 1) {
      result.push([...path, here]);
      return;
    }
    path.push(here);
    for (let there of graph[here]) {
      dfs(there, path);
    }
    path.pop();
  }
  dfs(0, []);
  return result;
};
