function findOdd(arr) {
  return [...arr.reduce((map, value) => map.set(value, (map.get(value) || 0) + 1), new Map()).entries()].find(([key, value]) => value % 2 === 1)[0];
}

const arr = [1,2,2,3,3,3,4,3,3,3,2,2,1];
console.log(findOdd(arr));

// xor로 더 깔끔하게 풀어낼 수 있다.