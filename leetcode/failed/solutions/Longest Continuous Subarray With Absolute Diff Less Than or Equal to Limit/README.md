# No. problem

- 작성 날짜: 2022-06-05
- 문제 링크: https://leetcode.com/problems/longest-continuous-subarray-with-absolute-diff-less-than-or-equal-to-limit/
- 이해도: 하

## 실패 이유

- 현재 슬라이드의 min, max값을 빠르게 얻어낼 수 있는 방법을 생각해내지 못함

## 문제 해결 아이디어

- min, max를 어떻게 하면 빠르게 얻어낼 수 있을까..
- 제일 먼저 떠오르는 방법은 heap(priority queue) 사용하면 O(nlog(n)) - 접근은 O(1)
- monotonic queue를 이용하면 O(n) - 접근은 O(1)
- monotonic이 붙은 자료구조의 핵심은 내부의 상태를 항상 정렬된 상태로 유지하는 것.
- 원소를 넣어야 할 때, 정렬된 상태를 유지하기 위해 특정 원소들을 삭제해야 한다.

## 소스 코드

```js
var longestSubarray = function (nums, limit) {
  const maxDeque = [];
  const minDeque = [];

  let l = 0,
    result = 0;
  for (let r = 0; r < nums.length; r++) {
    // monotonic dequeue 에 원소 주입
    while (maxDeque.length && maxDeque[maxDeque.length - 1] < nums[r]) maxDeque.pop();
    while (minDeque.length && minDeque[minDeque.length - 1] > nums[r]) minDeque.pop();
    maxDeque.push(nums[r]);
    minDeque.push(nums[r]);

    // 항상 정렬된 상태이므로, min과 max를 O(1)로 구해낼 수 있다
    // window를 축소시키며 window의 범위를 limit안으로 들어오게 하자
    while (maxDeque[0] - minDeque[0] > limit) {
      if (nums[l] === maxDeque[0]) maxDeque.shift();
      if (nums[l] === minDeque[0]) minDeque.shift();
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
};
```

## 코드 개선

```js
var longestSubarray = function (nums, limit) {
  const maxDeque = [];
  const minDeque = [];

  let l = 0,
    result = 0;
  for (let r = 0; r < nums.length; r++) {
    while (maxDeque.length && maxDeque[maxDeque.length - 1] < nums[r]) maxDeque.pop();
    while (minDeque.length && minDeque[minDeque.length - 1] > nums[r]) minDeque.pop();
    maxDeque.push(nums[r]);
    minDeque.push(nums[r]);

    // while을 if로 바꿨다.
    // 이렇게 하면 항상 window의 범위가 limit 이하라는 것을 보장할 수는 없으나..
    // window를 굳이 축소시킬 필요는 없다. 그 축소시킨 window가 답을 업데이트할 수가 없으니.
    if (maxDeque[0] - minDeque[0] > limit) {
      // 이렇게 함으로써 비싼 shift 연산의 횟수를 크게 줄일 수 있다.
      if (nums[l] === maxDeque[0]) maxDeque.shift();
      if (nums[l] === minDeque[0]) minDeque.shift();
      l++;
    }

    result = Math.max(result, r - l + 1);
  }

  return result;
};
```
