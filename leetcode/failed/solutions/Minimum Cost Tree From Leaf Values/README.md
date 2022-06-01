# No. problem

- 작성 날짜: 2022-06-01
- 문제 링크: https://leetcode.com/problems/minimum-cost-tree-from-leaf-values/
- 이해도: 중

## 실패 이유

- 너무 어렵게 생각했음
- 문제 유형을 파악할 때 최대한 다양한 경우의 수를 탐색해야함

## 문제 해결 아이디어

- cost가 제일 작은 트리를 만들어야 한다.
- 그렇다면, 지금 갖고 있는 leaf node들 중, 제일 작은 것을 선택해나가며 트리를 만들어야함
- 왜냐하면 값이 큰 leaf node를 먼저 선택해 트리를 만들어나가면, 그보다 작은 leaf node를 선택했을 때보다 cost가 커진다(올라가면서 계속해서 곱셈을 해나가기 때문에, 값이 큰게 아래에 있는 형태일수록 cost가 커짐).

## 소스 코드

```js
var mctFromLeafValues = function (arr) {
  let result = 0;
  while (arr.length > 1) {
    const min = Math.min(...arr);
    const minIndex = arr.findIndex((value) => value === min);
    result += Math.min(arr[minIndex - 1] || 16, arr[minIndex + 1] || 16) * arr[minIndex];
    arr.splice(minIndex, 1);
  }

  return result;
};
```

- 별걸 다해봤는데 최종 알고리즘과 코드는 너무 간단하다...
- 항상 거창한 알고리즘 기법이 아니라 단순하고 직관적인 생각으로도 문제를 해결할 수 있음을 기억하자.
