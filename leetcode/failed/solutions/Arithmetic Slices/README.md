# No. problem

- 작성 날짜: 2022-05-12
- 문제 링크: https://leetcode.com/problems/arithmetic-slices/
- 이해도: 상

## 실패 이유

- 너무 어렵게 생각했음.
- 어떻게 하면 연산을 줄일 수 있을지에 대한 깊은 생각을 하지 않음.

## 문제 해결 아이디어

- 단순히 배열의 모든 slice에 대하여 Arithmetic slice인지 검사할 수 있다.
- 하지만 그렇게 하면 O(n^3)의 시간복잡도를 갖게 된다.
- 그렇다면, 이전 연산 결과를 재활용하거나, 연산하지 않고도 추가적인 정보를 얻어낼 수 없는지 고민해보자.
- Arithmetic slice의 slice는 길이가 3을 넘는다면 무조건 arithmetic slice이다.
- 이를 활용한다면, 제일 큰 단위의 arithmetic slice를 구했을 때 그 배열의 모든 자식 arithmetic slice의 갯수를 바로 알 수 있다.

## 소스 코드

```js
var numberOfArithmeticSlices = function (nums) {
  const diffArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    diffArr.push(nums[i] - nums[i + 1]);
  }

  let result = 0;
  let sameDiffCount = 1;
  for (let i = 0; i < diffArr.length - 1; i++) {
    // arithmetic slice의 길이를 구하기 위함
    if (diffArr[i] === diffArr[i + 1]) sameDiffCount++;
    else {
      // 해당 slice의 길이(sameDiffCount = 2이면 slice이 길이는 3임)가 3이상일 때,
      // 해당 slice의 arithmetic slice들 까지 포함한 갯수를 바로 알 수 있다.
      if (sameDiffCount >= 2) {
        const n = sameDiffCount - 1;
        result += (n * (n + 1)) / 2;
      }
      sameDiffCount = 1;
    }
  }
  if (sameDiffCount >= 2) {
    const n = sameDiffCount - 1;
    result += (n * (n + 1)) / 2;
  }

  return result;
};
```

## 코드 개선

```js
var numberOfArithmeticSlices = function (nums) {
  const diffArr = [];
  for (let i = 0; i < nums.length - 1; i++) {
    diffArr.push(nums[i] - nums[i + 1]);
  }

  let curLength = 0;
  let result = 0;
  for (let i = 1; i < diffArr.length; i++) {
    // arithmetic slice를 다 구하고 마지막에 한번에 더해주는 방식이 아니라,
    // arithmetic slice를 만들어가면서 더해나가는 방식
    if (diffArr[i - 1] === diffArr[i]) {
      curLength++;
      result += curLength;
    } else curLength = 0;
  }

  return result;
};
```
