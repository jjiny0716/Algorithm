# 134. Gas Station

## 문제 링크

https://leetcode.com/problems/gas-station/

## 실패 이유

기존 솔루션은 2중 for문으로 모든 경우의 수를 체크했으므로, O(n^2)의 시간복잡도를 가지게 됨.  
시간 초과를 쉽게 예상할 수 있음.

## 문제 해결 아이디어

- gas - cost의 총합이 0 미만이라면, 어떻게 해도 정답이 될 수 없음.
- gas - cost의 총합이 0 이상이면, 정답이 무조건 있음.
  - 총합이 0 이상인데 정답이 없는 케이스는 없다.
  - 증가의 시작점에서 시작하면 되기 때문.

그렇다면, 총합을 구해서, 0 미만이면 -1을 리턴하고, 아닌 경우엔 구간 합을 0 이상으로 유지하면서 정답을 탐색해보자.

## 소스 코드

```js
var canCompleteCircuit = function (gas, cost) {
  cost = cost.map((value, i) => gas[i] - value);
  // 총합이 0 미만이면 정답이 존재할 수 없음.
  if (cost.reduce((sum, value) => (sum += value), 0) < 0) return -1;

  const n = cost.length;
  // s, e를 포함하는 경로를 조작하며 정답을 찾는다.
  let s = 0;
  let e = -1;
  let gasTank = 0;
  let length = 0;
  while (length < n) {
    // 가스량이 0 이상이면, 경로를 확장한다.
    if (gasTank >= 0) {
      e = (e + 1) % n;
      gasTank += cost[e];
      length++;
    }
    // 가스량이 0 미만이면, 경로를 축소한다.
    if (gasTank < 0) {
      gasTank -= cost[s];
      s = (s + 1) % n;
      length--;
    }
  }

  // 결국 length === n이 되는 경로를 찾을 수 있고, 해당 경로의 시작점을 반환
  return s;
};
```

## 추가 증명

문제를 풀 때 의심스러운 점이 하나 있었다.  
s가 0이고, e가 5일 때, 경로를 축소시켜 s가 2까지 증가했다면, 2에서 5까지 진행할 때 gasTank가 음수가 되는 순간이 없다고 장담할 수 있을까?
이는, 0과 1사이의 경로의 합이 음수이고, 이를 포함한 상태에서 0 이상을 유지하며 e가 증가했으므로, 음수 구간이 빠져도 당연히 양수임을 알 수 있다(음수를 빼면 기존보다 작아질 수 없다).
