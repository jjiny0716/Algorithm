# No. problem

- 작성 날짜: 2022-05-13
- 문제 링크: https://leetcode.com/problems/accounts-merge/
- 이해도: 중

## 실패 이유

- 내가 작성한 알고리즘이 정확히 어떻게 동작하는지 생각하지 않음.
- 문제를 구조적으로 나누지 못함

## 문제 해결 아이디어

- 문제는 같은 같은 이름과 같은 이메일을 가지고 있는 account를 합치는 것.
- 우선 같은 이름끼리 묶기위해 hashmap사용
- 같은 이메일을 가지고 있는 배열들을 합쳐야 한다... union find나 dfs가 생각남.
- 하나의 계정을 정점으로 보고, 같은 이메일을 가지고 있는 계정들을 연결한 그래프를 생성하자.
- 이후 dfs로 연결된 계정들을 순회하여 하나의 계정으로 합쳐주면 된다.

## 소스 코드

```js
var accountsMerge = function (accounts) {
  const map = {};
  for (let account of accounts) {
    const name = account[0];
    const emails = account.slice(1, account.length);
    if (!map[name]) map[name] = [];
    map[name].push(new Set(emails));
  }

  const result = [];
  const names = Object.keys(map);
  for (let name of names) {
    const size = map[name].length;

    // build adj graph
    const adj = Array.from({ length: size }, () => []);
    for (let i = 0; i < size; i++) {
      for (let j = i + 1; j < size; j++) {
        for (let email of map[name][i]) {
          if (map[name][j].has(email)) {
            adj[i].push(j);
            adj[j].push(i);
            break;
          }
        }
      }
    }

    // dfs to merge
    const visited = {};
    for (let i = 0; i < size; i++) {
      const mergedAccount = new Set();
      if (visited[i]) continue;
      mergeAccount(i, adj, map[name], visited, mergedAccount);
      result.push([name, ...[...mergedAccount].sort()]);
    }
  }

  function mergeAccount(here, adj, accounts, visited, result) {
    if (visited[here]) return;

    visited[here] = true;
    for (let email of accounts[here]) result.add(email);

    for (let there of adj[here]) {
      mergeAccount(there, adj, accounts, visited, result);
    }
  }

  return result;
};
```
