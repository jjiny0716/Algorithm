# No. problem

- 작성 날짜: 2022-04-30
- 문제 링크: https://leetcode.com/problems/lexicographical-numbers/
- 이해도: 상

## 실패 이유

- 아이디어 생각 실패

## 문제 해결 아이디어

- dfs인데... 어떻게 이걸 보고 dfs를 떠올릴 수 있을까?
- lexicographical order이므로, 1로 시작하는 숫자는 어떤 2로 시작하는 숫자보다 앞에 온다.
- 1로 시작하는 숫자만 보자. 1 뒤에 0~9를 붙이고, 그걸 반복하면서 10배씩 늘어나는 구조를 생각해보자.
- 이걸 어떻게 만들 수 있을까 생각해보면 dfs가 생각난다.

## 소스 코드

```js
var lexicalOrder = function (n) {
  const result = [];
  function dfs(num) {
    if (num > n) return;
    result.push(num);
    for (let i = 0; i <= 9; i++) {
      dfs(num * 10 + i);
    }
  }

  for (let i = 1; i <= 9; i++) {
    dfs(i);
  }

  return result;
};
```
