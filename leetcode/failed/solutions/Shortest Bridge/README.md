# No. problem

- 작성 날짜: 2022-04-29
- 문제 링크: https://leetcode.com/problems/shortest-bridge/
- 이해도: 상

## 실패 이유

- dfs로 두 섬을 수집후, 모든 점에 대해 거리를 구하는 코드를 작성했었다.
- 섬의 크기가 커질수록 소요 시간이 크게 늘어남.
- bfs를 활용하는 법을 몰랐음.

## 문제 해결 아이디어

- 문제를 종합해보면, 결국 두 섬을 잇는 최단 경로를 찾는 문제가 된다.
- 최단 경로 문제이므로 bfs를 쉽게 떠올릴 수 있지만, 문제는 어느 점에서 시작할지 모른다는 것.
- 그렇다면, 한 섬을 찾고, 그 섬의 모든 테두리에서부터 bfs를 시작하면 될 것이다.
- 섬의 테두리들은 또 어떻게 찾는가? -> dfs를 이용해야 한다.
- 정리해보면 이렇게 된다.

  1. 2중 반복문으로 grid를 순회하며 첫번째 섬을 찾는다.
  2. 찾은 점에서 dfs를 시작하여 섬의 테두리(바다쪽)를 수집한다.
  3. 수집한 정점들로 bfs를 이용해 다른 섬을 방문하는 순간을 포착한다.
  4. 그때까지 걸린 횟수를 반환하면 될 것이다.

## 소스 코드

```js
var shortestBridge = function (grid) {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const visited = {};
  const queue = [];

  function isOutOfGrid(y, x) {
    return y < 0 || x < 0 || y >= n || x >= n;
  }

  function dfs(y, x) {
    if (isOutOfGrid(y, x)) return;
    if (visited[`${y} ${x}`]) return;
    if (grid[y][x] === 0) {
      // bfs를 위한 queue에 섬의 외곽을 수집
      queue.push([y, x]);
      return;
    }
    visited[`${y} ${x}`] = true;

    for (let d of directions) {
      const [dy, dx] = d;
      dfs(y + dy, x + dx);
    }
  }

  // 첫번째 섬을 찾고, dfs돌린 후 탈출
  outerLoop: for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        dfs(y, x);
        break outerLoop;
      }
    }
  }

  // bfs
  let result = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      if (visited[`${y} ${x}`]) continue;
      // 첫번째 섬은 visited에 등록되어 있으므로, 이후에 만나는 섬은 무조건 2번째 섬이다.
      if (grid[y][x] === 1) return result;
      visited[`${y} ${x}`] = true;
      for (let d of directions) {
        const [dy, dx] = d;
        const [ny, nx] = [y + dy, x + dx];
        if (!isOutOfGrid(ny, nx) && !visited[`${ny} ${nx}`]) queue.push([ny, nx]);
      }
    }
    result++;
  }

  return -1;
};
```

## 코드 개선

- matrix, grid, board등으로 불리는 2차원 배열에서 visited를 사용하지 않을 수 있다.
- visited를 따로 운영하지 말고 입력 matrix를 이용하자.

```js
var shortestBridge = function (grid) {
  const n = grid.length;
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  const queue = [];

  function isOutOfGrid(y, x) {
    return y < 0 || x < 0 || y >= n || x >= n;
  }

  function dfs(y, x) {
    if (isOutOfGrid(y, x)) return;
    if (grid[y][x] === 2) return;
    if (grid[y][x] === 0) {
      queue.push([y, x]);
      return;
    }
    grid[y][x] = 2;

    for (let d of directions) {
      const [dy, dx] = d;
      dfs(y + dy, x + dx);
    }
  }

  outerLoop: for (let y = 0; y < n; y++) {
    for (let x = 0; x < n; x++) {
      if (grid[y][x] === 1) {
        dfs(y, x);
        break outerLoop;
      }
    }
  }

  // bfs
  let result = 0;
  while (queue.length) {
    const len = queue.length;
    for (let i = 0; i < len; i++) {
      const [y, x] = queue.shift();
      if (grid[y][x] === 2) continue;
      if (grid[y][x] === 1) return result;
      grid[y][x] = 2;
      for (let d of directions) {
        const [dy, dx] = d;
        const [ny, nx] = [y + dy, x + dx];
        if (!isOutOfGrid(ny, nx) && grid[ny][nx] !== 2) queue.push([ny, nx]);
      }
    }
    result++;
  }

  return -1;
};
```

- 단순히 방문 정보를 grid에 기록했을 뿐인데 시간과 메모리 사용량이 크게 향상되었다.
