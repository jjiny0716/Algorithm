# No. problem

- 작성 날짜: 2022-04-28
- 문제 링크: https://leetcode.com/problems/maximal-square/
- 이해도: 상

## 실패 이유

- 시간 복잡도
- 개선할 아이디어를 생각해내지 못함

## 문제 해결 아이디어

- brute force는 O((nm)^2)로 엄청난 시간이 든다 = TLE 가능성 높음
- 어떻게 계산을 줄일 수 있을까? -> 중복된 계산을 줄이자.
- 예전에 방문했던 위치를 또 방문하지 말고, 정보를 저장하여 재사용하자.
- 해당 위치에서 얻을 수 있는 최대의 square를 저장해두자.
- 이후 뒤쪽에서 해당 정보를 재사용하면 된다.

## 소스 코드

```js
var maximalSquare = function (matrix) {
  const m = matrix.length;
  const n = matrix[0].length;
  let maxSize = 0;

  for (let y = 0; y < m; y++) {
    for (let x = 0; x < n; x++) {
      // 0이나, 왼쪽이나 위에 닿는 케이스 먼저 처리해주자.
      if (matrix[y][x] === "0") continue;
      if (y === 0 || x === 0) {
        maxSize = Math.max(maxSize, 1);
        continue;
      }

      // 이전에 방문했던 점은 해당 위치에서 만들 수 있는 제일 큰 정사각형의 한 변의 길이를 저장하고 있다는 것을 기억하자.
      // 그렇다면 현재 위치에서 만들 수 있는 제일 큰 정사각형의 변의 길이는 다음과 같다.
      // 시각화를 하거나, 극단적인 케이스(0, 100, 100)을 상상해보면 이해가 잘된다.
      matrix[y][x] = Math.min(Number(matrix[y][x - 1]), Number(matrix[y - 1][x]), Number(matrix[y - 1][x - 1])) + 1;

      // 답을 업데이트한다.
      maxSize = Math.max(maxSize, matrix[y][x] ** 2);
    }
  }

  return maxSize;
};
```
