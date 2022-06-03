# No. problem

- 작성 날짜: 2022-06-03
- 문제 링크: https://leetcode.com/problems/longest-univalue-path/
- 이해도: 상

## 실패 이유

- path의 뜻을 정확히 하지 않음
- path는 그냥 쭉 직진하는 경로를 이야기하는듯?(세 갈래 길 같은 것 금지)

## 문제 해결 아이디어

- 트리 문제는 그림을 그려보는 것이 도움됨.
- 후위 순회로 양쪽 자식의 경로 정보를 얻어온 후 그것들을 잘 비교해 새로운 정보로 가공해 올려보내자.

## 소스 코드

```js
var longestUnivaluePath = function (root) {
  let result = 0;

  function inorderTraverse(node) {
    if (!node) return [10000, 0];

    const leftResult = inorderTraverse(node.left);
    const rightResult = inorderTraverse(node.right);

    const leftLength = leftResult[0] === node.val ? leftResult[1] : 0;
    const rightLength = rightResult[0] === node.val ? rightResult[1] : 0;

    result = Math.max(result, leftLength + rightLength);

    return [node.val, Math.max(leftLength, rightLength) + 1];
  }

  inorderTraverse(root);
  return result;
};
```
