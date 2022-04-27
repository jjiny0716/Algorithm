# No. problem

- 작성 날짜: 2022-04-27
- 문제 링크: https://leetcode.com/problems/find-the-duplicate-number/
- 이해도: 중

## 실패 이유

- 입력을 정확히 보지 않았다.

## 문제 해결 아이디어

- 문제 제약 사항

  - 입력 변형 금지
  - 상수 공간복잡도
  - 선형 시간 복잡도(제안)

- 처음부터 모든 조건을 만족하려 하지 말고 일단 풀어보자.
- 푸는데 다양한 방법이 있을 수 있겠다 싶으면, 각각의 성능을 비교해보자.
- 완전 탐색, 정렬, 이진 탐색, 해시 테이블등 알고있는 알고리즘을 먼저 고려하자.
- 조건을 모두 만족하는 알고리즘을 찾지 못했다면, 새로운 알고리즘을 생각해보자.
- 배열 크기가 n이고, 1~n까지의 범위를 갖고 있으므로, 배열 값을 인덱스로 생각하고, 해당 위치를 음수로 바꿔 기록하기.

## 소스 코드

```js
// sort O(nlog(n))
var findDuplicate = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) return nums[i];
  }

  return -1;
};

// 배열 마킹 O(n)
var findDuplicate = function (nums) {
  for (let num of nums) {
    // 배열 값을 인덱스로 생각한다.
    const i = Math.abs(num) - 1;

    // 이미 음수라면, 이전에 봤던 숫자이다!
    if (nums[i] < 0) return i + 1;

    // 음수로 바꿔 해당 인덱스에 해당하는 숫자를 한번 방문했음을 표시
    nums[i] = -nums[i];
  }

  return -1;
};
```

## 추가

- 문제 제약 사항을 모두 만족하는 알고리즘을 생각해내지 못했다.
- https://leetcode.com/problems/find-the-duplicate-number/discuss/72846/My-easy-understood-solution-with-O(n)-time-and-O(1)-space-without-modifying-the-array.-With-clear-explanation.
- 정답은 사이클 검출을 응용하는 것.
- 비트 연산으로도 가능하다고 한다...
