# No. problem

- 작성 날짜: 2022-05-10
- 문제 링크: https://leetcode.com/problems/swap-nodes-in-pairs/
- 이해도: 상

## 실패 이유

- 너무 성급했음.

## 문제 해결 아이디어

- 천천히 생각해보기
- 머릿속으로 잘 생각이 안되면 그림 그리기
- 과정을 시뮬레이션 해보고, 내가 짠 코드의 흐름을 따라가며 증명
- 레퍼런스 타입임을 꼭 인지하고, 절대 헷갈리지 말자.

## 소스 코드

```js
var swapPairs = function (head) {
  if (!head) return head;
  const root = head.next ?? head;
  let pointer = head;
  let lastNode = null;

  while (pointer && pointer.next) {
    const nextNode = pointer.next;
    pointer.next = nextNode.next;
    nextNode.next = pointer;
    if (lastNode) {
      lastNode.next = nextNode;
    }

    lastNode = pointer;
    pointer = pointer.next;
  }

  return root;
};
```
