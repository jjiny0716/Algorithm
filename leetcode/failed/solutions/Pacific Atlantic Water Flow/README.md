# 417. Pacific Atlantic Water Flow

- 작성 날짜: 2022-04-25
- 문제 링크: https://leetcode.com/problems/pacific-atlantic-water-flow/
- 이해도: 상

## 실패 이유

- 관점의 차이, 양쪽으로 흘러가는 곳 찾기 vs 바다에서 거슬러 올라가면서 겹치는 곳 찾기
- 알고리즘 작성중에 로직이 너무 복잡해진다면, 알고리즘을 잘못 선택한 건 아닌지 의심하기

## 문제 해결 아이디어

- 양쪽 바다로 흘러가는 점을 하나씩 찾기에는 너무 비효율적이다.
- 바다(grid 바깥쪽)에서 거슬러올라간다고 생각해보자.
- 현재 높이보다 작거나 같은 곳으로 흘러가므로, 반대로 생각하면 바다에서 시작해 높이가 크거나 같은 곳을 향해 이동.
- 즉. pacific에서 거슬러 올라가며 도달 가능한 모든 좌표를 기록하고, atlantic에서도 반복한다.
- 양쪽 바다에서 거슬러 올라올 수 있는 곳 = 양쪽 바다로 물이 흘러갈 수 있는 곳

## 소스 코드

```js
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  // 각 점이 어디 바다로 흘러갈 수 있는지 저장하는 3차원 배열
  const flowTo = Array.from({ length: m }, () => Array.from({ length: n }, () => [false, false]));

  // pacific ocean에서 시작해 도달 가능한 모든 점을 찾는다.
  function findFlowToPacific(y, x, last) {
    if (y < 0 || x < 0 || y >= m || x >= n || heights[y][x] < last) return;
    if (flowTo[y][x][0]) return;
    flowTo[y][x][0] = true;
    const height = heights[y][x];
    findFlowToPacific(y, x + 1, height);
    findFlowToPacific(y + 1, x, height);
    findFlowToPacific(y, x - 1, height);
    findFlowToPacific(y - 1, x, height);
  }

  // pacific ocean과 맞닿아있는 왼쪽 위 모서리에서 시작
  for (let y = 0; y < m; y++) findFlowToPacific(y, 0, 0);
  for (let x = 0; x < n; x++) findFlowToPacific(0, x, 0);

  // 위와 동일하지만, atlantic ocean으로 바뀌었을 뿐이다.
  function findFlowToAtlantic(y, x, last) {
    if (y < 0 || x < 0 || y >= m || x >= n || heights[y][x] < last) return;
    if (flowTo[y][x][1]) return;
    flowTo[y][x][1] = true;
    const height = heights[y][x];
    findFlowToAtlantic(y, x + 1, height);
    findFlowToAtlantic(y + 1, x, height);
    findFlowToAtlantic(y, x - 1, height);
    findFlowToAtlantic(y - 1, x, height);
  }

  const result = [];
  for (let y = 0; y < m; y++) findFlowToAtlantic(y, n - 1, 0);
  for (let x = 0; x < n; x++) findFlowToAtlantic(m - 1, x, 0);

  // 마지막으로 전체 배열을 순회하며 pacific과 atlantic이 겹치는 곳 찾아 result에 넣고 리턴
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (flowTo[y][x][0] && flowTo[y][x][1]) result.push([y, x]);
    }
  }
  return result;
};
```

## 코드 개선

- 어디로 흐를 수 있는지 저장하는 자료구조를 boolean 배열을 쓰니까 약간 헷갈릴 수 있겠다.
- findFlowToPacific, findFlowToAtlantic을 하나의 함수로 만들 수 없을까?

```js
var pacificAtlantic = function (heights) {
  const m = heights.length;
  const n = heights[0].length;
  // boolean 배열 대신 object 사용
  const flowTo = Array.from({ length: m }, () =>
    Array.from({ length: n }, () => {
      return { pacific: false, atlantic: false };
    })
  );

  // 하나의 함수로 합치고, ocean을 추가적으로 받음.
  function findPositionToFlow(y, x, last, ocean) {
    if (y < 0 || x < 0 || y >= m || x >= n || heights[y][x] < last) return;
    if (flowTo[y][x][ocean]) return;
    flowTo[y][x][ocean] = true;
    const height = heights[y][x];
    findPositionToFlow(y, x + 1, height, ocean);
    findPositionToFlow(y + 1, x, height, ocean);
    findPositionToFlow(y, x - 1, height, ocean);
    findPositionToFlow(y - 1, x, height, ocean);
  }

  for (let y = 0; y < m; y++) findPositionToFlow(y, 0, 0, "pacific");
  for (let x = 0; x < n; x++) findPositionToFlow(0, x, 0, "pacific");

  for (let y = 0; y < m; y++) findPositionToFlow(y, n - 1, 0, "atlantic");
  for (let x = 0; x < n; x++) findPositionToFlow(m - 1, x, 0, "atlantic");

  const result = [];
  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      if (flowTo[y][x].pacific && flowTo[y][x].atlantic) result.push([y, x]);
    }
  }
  return result;
};
```
