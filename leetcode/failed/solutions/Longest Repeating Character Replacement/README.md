# No. problem

- 작성 날짜: 2022-05-28
- 문제 링크: https://leetcode.com/problems/longest-repeating-character-replacement/
- 이해도: 상

## 실패 이유

- O(n^2)의 시간복잡도를 가지는 알고리즘으로 작성했음.
- 특정한 상태를 유지하는 가변 길이 window를 이용할 생각을 하지 못했다.

## 문제 해결 아이디어

- 특정한 문자열에서 k개를 바꿀 수 있을 때, 모든 문자열을 같은 문자로 바꿀 수 있는 조건을 생각해보자.
- 해당 문자열에서 가장 많은 문자를 선택해서, 그 문자가 아닌 나머지들을 바꾸면 된다.
- 문자열의 길이 - 문자열에서 제일많은 문자의 갯수 <= k를 유지하는 window를 이용하자.

## 소스 코드

```js
var characterReplacement = function (s, k) {
  const map = new Map();
  let i = 0,
    j,
    max = 0;
  let result = 0;

  for (j = 0; j < s.length; j++) {
    map.set(s[j], (map.get(s[j]) || 0) + 1);
    max = Math.max(...map.values());

    // length - max count of char > can replace count
    while (j - i + 1 - max > k) {
      map.set(s[i], map.get(s[i]) - 1);
      i++;
      max = Math.max(...map.values());
    }

    result = Math.max(result, j - i + 1);
  }

  return result;
};
```

## 코드 개선

- 어차피 알파벳이 26개라 `Math.max(...map.values())`로 max를 구했지만... 그래도 조금 비효율적임.
- 최근에 증가시킨 value만 max와 비교하면 된다.

```js
var characterReplacement = function (s, k) {
  const map = new Map();
  let i = 0,
    j,
    max = 0;
  let result = 0;

  for (j = 0; j < s.length; j++) {
    map.set(s[j], (map.get(s[j]) || 0) + 1);

    // 최근에 증가시킨 value를 이용해 max를 업데이트하기.
    max = Math.max(max, map.get(s[j]));

    while (j - i + 1 - max > k) {
      map.set(s[i], map.get(s[i]) - 1);
      i++;

      // 사실 아래식은 필요가 없다.
      // 특정 시점에서 max가 정확하지 않을 수 있다.
      // 하지만 max가 커질수록 답도 커짐 -> 그 시점의 max보다 작은 max를 갖는 window가 result를 업데이트시킬 가능성이 없음.
      // max = Math.max(...map.values());
    }

    result = Math.max(result, j - i + 1);
  }

  return result;
};
```
