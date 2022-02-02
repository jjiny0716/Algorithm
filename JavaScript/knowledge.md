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
