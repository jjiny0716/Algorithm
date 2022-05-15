# No. problem

- 작성 날짜: 2022-05-15
- 문제 링크: https://leetcode.com/problems/search-in-rotated-sorted-array-ii/submissions/
- 이해도: 중

## 실패 이유

- 이진 탐색을 내가 아는 형태로만 작성하려 고집했음.

## 문제 해결 아이디어

- 정렬된 리스트와 target찾기를 보면 이진 탐색임을 쉽게 알 수 있다.
- 이진 탐색을 하는데, mid보다 왼쪽의 값이 더 큰 상황(기본적으로 오름차순으로 정렬되있는데..)이면, 그 사이에 pivot이 있음을 유추할 수 있다.
- 그렇다면 반대쪽은 정렬되있음을 보장할 수 있으니까, 해당 정보를 가지고 잘 구현해보자.

## 소스 코드

```js
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {boolean}
 */
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    // 찾으면 return하면 된다.
    if (nums[mid] === target) return true;

    // mid와 right가 같으면, 어느쪽이 정렬되어있는지 알 수가 없다..
    if (nums[mid] === nums[right]) right--;
    // mid의 오른쪽이 정렬되어있다.
    else if (nums[mid] < nums[right]) {
      // target이 그사이에 있다면 그쪽으로 가자!
      if (nums[mid] <= target && target <= nums[right]) left = mid + 1;
      else right = mid - 1;
    }
    // 위와 같은데, 왼쪽이 정렬되어있을 뿐.
    else {
      if (nums[left] <= target && target <= nums[mid]) right = mid - 1;
      else left = mid + 1;
    }
  }

  return false;
};
```
