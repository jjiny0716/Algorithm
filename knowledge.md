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
