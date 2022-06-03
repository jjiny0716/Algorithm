# No. problem

- 작성 날짜: 2022-06-03
- 문제 링크: https://leetcode.com/problems/minimum-height-trees/
- 이해도: 중

## 실패 이유

- 아이디어 생각 실패
- 입력의 크기와 시간복잡도를 고려해 안될 것 같은 알고리즘은 구현에 너무 힘쏟지 말기

## 문제 해결 아이디어

- 트리도 결국 그래프인데, 그래프의 어디를 찍어야 가장 낮은 레벨을 갖는 트리를 얻을 수 있을까?
- 그래프의 중심의 가까운 점을 루트로 할 수록 레벨이 낮아짐을 알 수 있다.(최악의 경우인 링크드 리스트를 예시로 들어 생각해보자)
- 그런데... 중심을 어떻게 찾을 수 있을까?
- 그래프의 외각 정점은 연결된 정점이 하나인 특징을 이용하자.
- 외각 정점을 지워나가면서 마지막까지 생존하는 정점들을 반환하면 된다.

## 소스 코드

```js
/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findMinHeightTrees = function (n, edges) {
  // 예외 처리
  if (n === 1) return [0];

  // 그래프, 연결된 정점 갯수 정보 생성
  const adj = Array.from({ length: n }, () => []);
  const connectedCount = Array.from({ length: n }, () => 0);
  for (let [v1, v2] of edges) {
    adj[v1].push(v2);
    adj[v2].push(v1);
    connectedCount[v1]++;
    connectedCount[v2]++;
  }

  // 연결된 정점이 1개인 정점들부터 시작
  const queue = [];
  for (let i = 0; i < connectedCount.length; i++) {
    if (connectedCount[i] === 1) queue.push(i);
  }

  // 1. 외각 정점을 제거한다. (정확히는 외각 정점과 연결된 정점들의 연결 갯수를 1씩 줄이는 것)
  // 2. 연결 갯수가 1이 된 정점을 queue에 넣는다.
  // 3. queue의 길이가 0이 될때까지 반복
  let result = [];
  while (queue.length) {
    const len = queue.length;
    if (len <= 2) result = [...queue];

    for (let i = 0; i < len; i++) {
      const v = queue.shift();
      for (let connectedVertex of adj[v]) {
        connectedCount[connectedVertex]--;
        if (connectedCount[connectedVertex] === 1) queue.push(connectedVertex);
      }
    }
  }

  return result;
};
```

## 추가 증명

- 왜 len이 2이하일때만 result를 업데이트 할까?
- 답은 무조건 1개나 2개가 될 수밖에 없다.
- 만약 3개가 결과로 나왔다고 치면, 그 3개는 연결되어 있고, 싸이클은 존재하지 않으므로, 무조건 가운데에 낀 정점이 생긴다.
- 그러면, 해당 정점이 유일한 결과가 된다.
