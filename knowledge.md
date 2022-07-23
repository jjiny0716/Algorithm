# 알게된 것

## 2022-01-27

### 큰 숫자 표현

1000000 = 1e6 (10의 6승을 e6로 표현)
0.00001 = 1e-5

## 2022-01-28

### unshift vs push

배열을 채울때, 값의 순서를 거꾸로 하고싶어서 push대신 unshift를 사용할려다가, 자바스크립트에서의 Array와 push, unshift메소드의 구현 방식이 궁금해졌다. 우선 c++의 vector나 java의 Arraylist처럼 크기가 변하는 배열로 구현이 되있다고 한다. 그리고 unshift는 아얘 공간을 새로 잡아다가 거기에 값을 추가하고, 배열을 복사한다고 한다. 그래서 항상 O(n)의 비용이 발생한다...; 그에반해 push는 배열 공간이 부족해서 크기를 키울때만 복사가 일어나기 때문에 훨씬 효율적이다(애초에 linked list가 아니라 당연한 것 같기도하고..). unshift의 사용은 지양하자.

```
[Running] node "c:\Users\yoojin\source\vscode\test.js"
unshift * 100000: 1.637s
push * 100000 + reverse: 3.941ms

[Done] exited with code=0 in 1.74 seconds
```

## 2022-01-30

### 구조분해할당을 이용한 swap

[a, b] = [b, a]

## 2022-02-03

## eval 함수는 쓰지말자

문자열로 주어진 수학식을 계산한 결과를 얻기 위해 eval함수를 사용했다. eval은 문자열을 코드로 인식하게 하는 함수이다. eval함수를 유용하게 사용하고, 더 알아보기 위해 검색했는데, eval를 사용하지 말라고 한다. 그 이유는 대체로 2가지였다.

1. eval은 인자로 받은 코드를 caller의 권한으로 실행하기 때문에, 악의적인 영향을 받은 문자열을 eval로 실행하여, 다양한 공격을 할 수 있음.
2. 최신 JS 엔진에서 여러 코드 구조를 최적화하는 것과 달리 eval()은 JS 인터프리터를 사용해야 하기 때문에 다른 대안들보다 느림.

앞으로 eval함수를 사용하지 말자.

## 2022-02-04

### string.replace의 2번째 인자에 함수 전달

매칭된 문자를 인자로 받고, 문자열을 리턴하는 함수를 전달하여 사용할 수 있다.

```js
line = line.replace(/ +/g, function (spaces) {
  return spaces + (lineLen++ < len ? " " : "");
});
```

## 2022-02-13

### Array.sort 기준

[MDN문서](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort): compareFunction이 제공되지 않으면 요소를 문자열로 변환하고 유니코드 코드 포인트 순서로 문자열을 비교하여 정렬됩니다.  
문자열을 사전순으로 정렬하고 싶으면, 그냥 sort()를 하면 된다.

### iterable to array

```js
[...map.values()];
Array.from(map.values());
```

## 2022-02-17

### 함수안에 함수

알고리즘 문제를 풀때, 추가적인 함수를 만들때, 인자가 너무 많아진다면 함수안에 함수를 만드는 것을 고려해보자. solution함수안에 있는 함수는 solution함수에 있는 변수를 마치 global변수처럼 사용할 수 있다.

## 2022-02-20

### Prefix sum (구간 합)

a~b까지의 합을 의미한다. 부분 합을 전부 구해서 저장해두고, arr[b] - arr[a - 1]을 해주면 구해짐.

## 2022-02-23

### 단축평가 이용해서 map 사용하기

```js
// 원래 쓰던 방법 (2줄)
if (!m.get(char)) m.set(char, 0);
m.set(char, m.get(char) + 1);

// 단축평가를 이용해서 1줄로 줄여보자.
m.set(char, (m.get(char) || 0) + 1);
```

## 2022-03-01

### 플로이드 순환 찾기 알고리즘

기존에 순환을 검사하기 위해서, 해시셋을 사용했는데, 새로운 알고리즘을 발견했다.  
속도가 다른 두 포인터를 루프에 넣고 진행시키면, 순환일 경우 결국 같은 노드를 가리키게 된다.

### dfs에서 grid의 범위를 벗어났는지 검사하는 방법

```js
if (grid[i]===undefined || grid[i][j]===undefined)
```

## 2022-03-02

### 최소값, 최대값을 저장하는 변수의 초기화

입력의 첫번째 값을 사용해도 되지만, 빈 입력을 대비해 infinity를 이용해볼 수 있겠다.

```js
let min = infinity;
let max = -infinity;
```

## 2022-03-03

### 입력받은 board(2차원 배열? 행렬?)을 in-place 변환해야할때 고정관념

무의식적으로 board의 변경을 중간과정에 이용하지 않고 있었다. 예를 들어 board에서 특정 영역은 바뀌고 특정 영역은 바뀌지 않는다면, dfs를 이용해서, board의 바뀌는 값(혹은 바뀌지 않는 값)을 다른 것으로 바꿔두고, 마지막에 순회하면서 처리해도 된다.

## 2022-03-05

### map과 set의 length

set의 길이를 얻기 위해서, 배열로 변환한 후 length 프로퍼티를 사용했다. 하지만 map과 set에는 size라는 프로퍼티가 있어서 길이를 바로 제공받을 수 있다.

### 이진탐색으로 얻는 인덱스 (내가 주로쓰는 이진탐색 구현에서)

target과 같은 값이 arr에 존재하면, 그 값의 인덱스를 반환받지만, 없다면, target보다 큰 제일 가까운 값의 인덱스를 받는다. 실수하지 않도록 주의하자.

## 행렬에서 대각선 요소들

행렬에서 오른쪽 위로 향하는 대각선 요소들의 y와 x의 합은 일정하다. (2, 0), (1, 1), (0, 2)의 합은 전부 2이다. 이 성질을 이용하면 행렬에서 대각선 방향의 로직을 처리하는데 유용할 수 있겠다.

## 2022-03-08

### Array 초기화

```js
Array.from({ length: n }, () => 0);
new Array(n).fill(0);
```

## 2022-03-10

### 문자열 검사

정규식을 이용해 문자열을 검사하고 싶다면, String.prototype.match()를 이용해보자.

```js
function isLetter(str) {
  return str.length === 1 && str.match(/[a-z]/i);
}
```

## 2022-03-12

### XOR 연산자

XOR 연산은 두 값의 비트 자릿수를 비교해, 값이 같으면 0, 다르면 1을 계산한다. 즉, 같은 숫자를 XOR 연산하면, 0이 나온다. 이 성질을 이용해서, 배열의 동등 검사나, 다른 값 하나를 추출해내는 등의 응용이 가능하다.

## 2022-03-13

### 해시맵, 해시셋

지금까지 특정 원소의 존재 유무를 저장할 때 해시맵을 이용했다. hashMap[key] = true 이런 식으로 사용했었는데, 이런 경우엔 그냥 해시셋을 이용하는게 나아보인다.

## 2022-03-17

### 범위가 작은 문제에서 고정크기 배열 사용하기

가공해야하는 값의 범위가 작은 문제에서, 습관적으로 정렬등의 알고리즘을 사용하지 말고, 고정크기의 배열을 사용한 후 선형탐색으로 시간복잡도를 줄여보자.
[관련 문제](https://leetcode.com/problems/car-pooling/)

## 2022-03-19

### 메모이제이션 배열 위치

외부에 캐시를 두지 않고, 디폴트 파라미터를 이용할 수 있다.

```js
const tribonacci = function (n, arr = []) {};
```

### hashmap으로 카운팅할때

```js
// 기존에 쓰던 방법
map[char] = map[char] ? map[char]++ : (map[char] = 1);
// 새로 찾은거
map[char] = (map[char] || 0) + 1;
```

### 문제를 거꾸로 생각해보는게 도움이 될 수 있다

10개에서 3개를 선택하는 것 = 10개에서 7개를 선택하는 것 이런식으로.  
https://leetcode.com/problems/non-overlapping-intervals/

## 2022-03-20

### 더 빠른 배열 초기화 방법

```js
// 기존에 사용하던 방식
Array.from({ length: r }, () => Array.from({ length: c }, () => 0));

// 이게 더 빠르다.
Array.from({ length: r }, () => Array.from({ length: c }).fill(0));
```

## 2022-03-22

### Object의 기본 키 정렬?

자세히는 모르겠지만, Object에서 키값을 계속해서 숫자로 전달하면, 자동으로 키 값에 의해 정렬이 되는 것을 확인할 수 있었다.

```js
const obj = {};
obj[1] = "one";
obj[0] = "zero";
console.log(obj);
// { '0': 'zero', '1': 'one' }
```

이 성질을 이용해서 입력값을 정렬하지 않고도 문제를 풀어낼 수 있었다. 기억해두자.

## 2022-03-23

### 알파벳 범위의 키를 가지는 해시맵

알파벳 범위의 키를 가지는 해시맵을 이용해서 문제를 풀어야한다면, String.prototype.charCodeAt()과 26의 크기를 가지는 동적 배열을 이용해 시간 개선을 해볼 수 있다.

### shift vs pop

전에 unshift vs push를 비교한 적이 있다. unshift가 push에 비해 훨씬 느리다는 내용으로 기억한다. 오늘 shift랑 pop의 성능차이가 궁금해서 실험해봤는데, 같은 양상을 보였다. 근데 재밌는 점은 1000개정도의 데이터에서는 차이가 나지 않는다는 것이다. 내 컴퓨터(i5-4690) 기준으로 배열 요소 1000개를 각각 shift, pop으로 제거해봤는데, 대략 0.1ms로 사실상 차이가 보이지 않았다. 5000개쯤 되니 2배이상 벌어지는 모습을 보였는데, 기존에 shift의 사용을 굉장히 꺼려했었는데, 앞으로 문제를 해결할 때 배열의 크기가 어디까지 늘어날 수 있을지 잘 고민해보고, 상황에 맞춰 shift를 사용해도 괜찮을 것 같다.

## 2022-03-25

### DAG는 visited정보가 필요 없다.

이미 방문했던 정점을 또 방문하는 것을 막기 위해 visited를 쓰는 것인데, DAG는 그럴 일이 없다.

## 2022-03-28

### 함수의 인자를 인덱스로 cache에 저장한다고 생각해보기.

paths(i, j, n) 의 값을 그대로 cache[i][j][n]에 저장한다고 생각하니까 받아들이기 좀 편하다.

## 2022-04-06

### 행렬에서 오른쪽 아래로 내려가는 대각선

i - j가 일정하다. 반대방향의 대각선은 i + j가 일정하니까, 대각선을 다뤄야하는 행렬문제에서 잘 활용하자.

## 2022-04-08

### 값 비교시 infinity 사용

엄청 큰 수나 작은 수를 초기화 목적으로 사용해야 할 때, infinity를 사용하는게 좋아보인다.

## 2022-04-13

### 방향 전환

```js
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];
// 방향을 담은 배열에 사용할 인덱스 d
d = (d - 1 + DIR_COUNT) % DIR_COUNT;
d = (d + 1) % DIR_COUNT;
```

## 2022-04-29

### 2중 반복문 한번에 탈출하기

```js
// for문에 레이블을 붙일 수 있다.
outerLoop: for (let y = 0; y < n; y++) {
  for (let x = 0; x < n; x++) {
    if (grid[y][x] === 1) {
      dfs(y, x);
      break outerLoop;
    }
  }
}
```

## 2022-05-02

### BFS 최적화

```js
while (queue.length) {
  // steps를 좌표와 함께 저장하기.
  // 내부에서 for문을 한번 더 이용해 기존 queue를 비워내는 방식보다 빠름
  // 정확한 이유를 모르겠다.....
  const [y, x, steps] = queue.shift();
  if (y === n - 1 && x === m - 1) return steps;

  for (let direction of directions) {
    const [dy, dx] = direction;
    const [ny, nx] = [y + dy, x + dx];
    if (isValid(ny, nx)) {
      queue.push([ny, nx, steps + 1]);
      // queue에 집어넣을 때 마킹하기
      // queue에서 뺄 때 마킹하면, 해당 좌표가 queue에 여러개가 있을 수 있게 됨.
      maps[ny][nx] = 0;
    }
  }
}
```

## 2022-05-07

### 여러개의 구분자로 split 사용하기

정규 표현식을 이용하자.

```js
const numbers = expression.split(/[\+\-\*]/);
```

## 2022-05-23

### set과 bitmask

값의 범위가 작고, set을 이용해 중복검사를 할 수 있디면, bitmask를 이용해 속도를 크게 증가시킬 수 있다.  
bit을 켜서 해당 원소가 있음을 표시하고, and연산을 해서 0이 나오면 중복된 원소가 없는 원리를 이용.

## 2022-05-25

### hash table이 필요할 때 Object vs Map

- set은 Object가 조금 더 빠름.
- get은 Map이 훨씬 빠름.
- 위의 특징을 잘 고려해 사용하면 될 것 같다.

## 2022-06-12

### bfs 개선

- 한 단계씩 체크하면서 진행해야 하는 bfs에서 개선 가능.
- shift를 쓰지 말고, for of문을 이용해 순회, queue를 새로 만들어서 다음 정점을 넣고 교체하기.

## 2022-07-23

### SIGSEGV

- 허용되지 않은 메모리 액세스
- 재귀로 dfs구현하다 스택 오버플로우났을 때 SIGSEGV가 떴다.
