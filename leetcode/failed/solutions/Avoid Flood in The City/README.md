# No. problem

- 작성 날짜: 2022-05-29
- 문제 링크: https://leetcode.com/problems/avoid-flood-in-the-city/
- 이해도: 상

## 실패 이유

- 문제에 대해 깊게 생각하지 않아 잘못된 알고리즘으로 작성함

## 문제 해결 아이디어

- 비가 안내리는 날을 만났어도, 어디를 말려야하는지 바로 알 수 없고, 그 이후의 정보가 더 필요함.
- 비가 안내리는 날을 dry로 저장해두고, 이전에 비가 내렸던 곳에 또 비가 내리는 상황에서, 저장해둔 dry를 사용하자.
- 여러 dry중에선 이전에 비 내렸던 날에서 가장 가까운 dry를 사용하는게 최선의 수이다. 왜냐하면 가장 가깝지 않은 dry는 가장 가까운 dry보다 더 많은 lake를 말리는데 사용할 수 있기 때문이다.
- dry들은 정렬되있으므로, 이진 탐색을 이용해 target에 제일 가까운 dry를 찾아보자.

## 소스 코드

```js
/**
 * @param {number[]} rains
 * @return {number[]}
 */
var avoidFlood = function (rains) {
  const noRains = [];
  const fullLakeMap = {};
  const driedMap = {};

  for (let i = 0; i < rains.length; i++) {
    const rain = rains[i];
    if (rain) {
      if (fullLakeMap[rain] !== undefined) {
        if (!noRains.length || noRains.at(-1) < fullLakeMap[rain]) return [];

        const closest = binarySearch(noRains, fullLakeMap[rain]);
        driedMap[noRains[closest]] = rain;
        noRains.splice(closest, 1);
      }
      fullLakeMap[rain] = i;
    } else {
      noRains.push(i);
    }
  }

  return rains.map((rain, i) => (rain ? -1 : driedMap[i] || 1));
};

function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    else if (arr[mid] > target) right = mid - 1;
    else left = mid + 1;
  }

  return left;
}
```

## 코드 개선

- 현재 사용하는 hashmap들의 읽기 빈도수가 쓰기 빈도수보다 많기 때문에, object말고 Map을 사용하면 조금 빨라진다.
