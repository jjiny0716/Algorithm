# 1574. Shortest Subarray to be Removed to Make Array Sorted

## 문제 링크

https://leetcode.com/problems/shortest-subarray-to-be-removed-to-make-array-sorted/

## 실패 이유

모든 경우의 수에 대응하는 알고리즘을 생각해내지 못함.

## 문제 해결 아이디어

- subarray를 하나만 정해서 제거하여 오름차순으로 증가하는 배열 만들기.
- 모든 경우의 수를 계산하면 O(n^2)의 시간복잡도를 가진다.
- 쉽게 생각해보면, 전체 배열에서 증가하는 부분 배열 2개(0에서 시작, n - 1에서 끝)를 선택하는 것.
- 그렇다면 끝에 닿아있는 부분 배열을 최대한으로 확장 시키고, 왼쪽 부분 배열을 증가시키며 탐색해보자.
- 왼쪽 부분 배열의 끝 원소가 오른쪽 부분 배열의 첫 원소보다 작거나 같음을 유지하며, l과 r을 조절해보자.

## 소스 코드

```js
var findLengthOfShortestSubarray = function (arr) {
  const n = arr.length;
  let l = 0,
    r = n - 1;
  while (arr[r - 1] <= arr[r]) r--;
  let result = r;
  for (l = 0; l < r && (l === 0 || arr[l - 1] <= arr[l]); l++) {
    while (r < n && arr[l] > arr[r]) r++;
    result = Math.min(result, r - l - 1);
  }
  return result;
};
```
