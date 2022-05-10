# No. problem

- 작성 날짜: 2022-05-10
- 문제 링크: https://leetcode.com/problems/smallest-string-starting-from-leaf/
- 이해도: 상

## 실패 이유

- 잘못된 알고리즘 선택
- 알고리즘의 정당성을 엄밀히 증명하지 않았음.

## 문제 해결 아이디어

- left노드부터 올라오면서 얻은 string들을 비교해 lexicographically smallest string 반환하기.
- 단순히 dfs로 string을 생성 후 전부 비교하면 된다.

## 소스 코드

```js
var smallestFromLeaf = function (root) {
  let result = "";
  function findLexicographicallySmallestString(node, str) {
    if (!node) return;

    const nextStr = String.fromCharCode(node.val + "a".charCodeAt(0)) + str;

    // leaf노드에 도달했을 때, 얻은 string을 이전 결과와 비교하여 업데이트한다.
    if (node.left === null && node.right === null && (!result || result > nextStr)) {
      result = nextStr;
      return;
    }

    findLexicographicallySmallestString(node.left, nextStr);
    findLexicographicallySmallestString(node.right, nextStr);
  }
  findLexicographicallySmallestString(root, "");

  return result;
};
```

## 추가 증명

- 다음은 분할 정복 알고리즘을 사용한 코드이다.

```js
var smallestFromLeaf = function (root) {
  if (root === null) return;
  const leftStr = smallestFromLeaf(root.left);
  const rightStr = smallestFromLeaf(root.right);
  return getSmallerStr(leftStr, rightStr) + String.fromCharCode(root.val + "a".charCodeAt(0));
};

function getSmallerStr(leftStr, rightStr) {
  if (leftStr === undefined || rightStr === undefined) {
    return (leftStr ?? "") + (rightStr ?? "");
  }
  return leftStr.localeCompare(rightStr) === -1 ? leftStr : rightStr;
}
```

- string을 완전히 만들기 전에 미리 비교해나가는 것.
- 문제는 현재 더 작은(사전적으로) 문자열이 추가적인 문자열을 더한 후에도 더 작을 것이라는 보장을 할 수 없다.
- 즉, `X < Y -> X + a < Y + a`임을 보장할 수 없다.
- ex) `"ab" < "abab", but "abz" > "ababz" `
