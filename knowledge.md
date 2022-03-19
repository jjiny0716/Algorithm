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