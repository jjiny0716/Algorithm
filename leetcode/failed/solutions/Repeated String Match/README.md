# No. problem

- 작성 날짜: 2022-05-09
- 문제 링크: https://leetcode.com/problems/repeated-string-match/
- 이해도: 상

## 실패 이유

- 너무 어렵게 생각했다.
- 문제가 어려워보이더라도 간단한 아이디어가 정답이 될 수 있음을 고려하자.

## 문제 해결 아이디어

- a을 반복해서 더했을 때 b가 a의 substring이 될 수 있는 최소 횟수 구하기 => repeat, includes를 이용해야 하는 것을 쉽게 알 수 있다.
- b가 a의 substring이 되려면 a의 길이가 b보다 커야함.
- a의 길이가 b의 길이보다 커지도록 repeat을 이용한 후, includes를 이용해 조사하기.
- 단, a.repeat과 b의 길이가 서로 같을 때, b의 시작점이 a의 시작점과 같지 않을 때를 대비해 a를 한번 더 더한 경우도 조사해야함.

## 소스 코드

```js
var repeatedStringMatch = function (a, b) {
  const n = Math.ceil(b.length / a.length);
  if (a.repeat(n).includes(b)) return n;
  else if (a.repeat(n + 1).includes(b)) return n + 1;

  return -1;
};
```
