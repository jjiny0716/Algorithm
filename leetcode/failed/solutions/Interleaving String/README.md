# No. problem

- 작성 날짜: 2022-04-26
- 문제 링크: https://leetcode.com/problems/interleaving-string/
- 이해도: 중

## 실패 이유

- 완전 탐색을 이용했을때 시간 초과
- 더 나은 알고리즘 찾지 못했음.

## 문제 해결 아이디어

- 효율적인 알고리즘을 찾지 못했을 때 일단 완전탐색으로 구현해보기.
- 시간복잡도가 문제가 될 때, 탐욕법이나 동적 계획법등으로 넘어가보자.
- 중요한 것은 중복되는 계산을 줄이는 것.
- s1 의 인덱스 i, s2의 인덱스 j가 같아도, 여러 조합이 가능하다.
- 하지만 어떻게 조합하던지 i와 j에서 더 진행했을 때 답이 될수 있는지 없는지는 정해져있다.
- 그렇다면 i, j의 결과를 저장해둔다면, 다른 조합으로 i, j에 방문했을 때 결과를 바로 알 수 있다.

## 소스 코드

```js
// dfs를 이용한 완전 탐색. TLE
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  let result = false;
  function makeAllInterleave(i, j) {
    if (result) return;
    if (i + j === s3.length) {
      result = true;
      return;
    }

    if (i < s1.length && s1[i] === s3[i + j]) makeAllInterleave(i + 1, j);
    if (j < s2.length && s2[j] === s3[i + j]) makeAllInterleave(i, j + 1);
  }
  makeAllInterleave(0, 0);

  return result;
};

// 캐싱을 이용.
var isInterleave = function (s1, s2, s3) {
  if (s1.length + s2.length !== s3.length) return false;
  const isNotAnswer = Array.from({ length: s1.length + 1 }, () => Array.from({ length: s2.length + 1 }));

  function makeAllInterleave(i, j) {
    // i, j가 답이 될수 없다면 더 진행하지 않는다.
    if (isNotAnswer[i][j]) return false;
    if (i + j === s3.length) return true;

    // 한줄로 바꿀순 있는데 너무 길어져서..
    let result = false;
    result = result || (i < s1.length && s1[i] === s3[i + j] && makeAllInterleave(i + 1, j));
    result = result || (j < s2.length && s2[j] === s3[i + j] && makeAllInterleave(i, j + 1));

    // i, j에서 더 진행했을때 결과를 얻을 수 없었다면, 저장한다.
    // 이렇게 하면 다른 조합으로 i, j에 다시 방문했을 때, 더 진행할 필요가 없다.
    if (!result) isNotAnswer[i][j] = true;
    return result;
  }

  return makeAllInterleave(0, 0);
};
```
