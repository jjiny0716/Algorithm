# No. problem

- 작성 날짜: 2022-05-11
- 문제 링크: https://leetcode.com/problems/subarray-product-less-than-k/
- 이해도: 중

## 실패 이유

- 문제를 정확히 읽지 않음.
- sliding window라는 알고리즘을 몰랐음.

## 문제 해결 아이디어

- 알고리즘이 떠오르지 않으면 일단 완전탐색으로 구현
- O(n^2)으로 시도했으나 너무 느림.
- 그렇다면 중복되는 연산을 파악해보자.
- i부터 쭉 진행하며 곱한 정보를 버리고 다시 시작하는 것을 알 수 있다.
- 즉, 곱한 정보를 버리지 않고 계속해서 사용하는 알고리즘을 구현해야 함.

## 소스 코드

```js
// brute force O(n^2)
var numSubarrayProductLessThanK = function (nums, k) {
  const n = nums.length;
  let result = 0;

  for (let i = 0; i < n; i++) {
    let totalProduct = 1;
    for (let j = i; j < n; j++) {
      totalProduct *= nums[j];
      if (totalProduct < k) result++;
      else break;
    }
  }

  return result;
};

// sliding window O(n)
var numSubarrayProductLessThanK = function (nums, k) {
  let result = 0;
  let totalProduct = 1;

  for (let i = 0, j = 0; j < nums.length; j++) {
    totalProduct *= nums[j];
    while (totalProduct >= k && i <= j) {
      totalProduct /= nums[i];
      i++;
    }

    // window의 size가 n일 때, 그 n개로 만들 수 있는 subarray의 갯수는 n * (n + 1) / 2가 된다.
    // 즉, window를 확장해나가면서 사이즈만큼 더해주기만 하면 경우의 수를 다 더하면서 갈 수 있다.
    result += j - i + 1;
  }

  return result;
};
```
