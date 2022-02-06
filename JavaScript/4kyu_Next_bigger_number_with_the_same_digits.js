function nextBigger(n){
  const arr = n.toString().split('');

  for (let i = arr.length - 1 ; i > 0 ; i--) {
    if (arr[i - 1] < arr[i]) {
      const rightSubArr = arr.slice(i, arr.length).sort((a, b) => a - b);
      for (let j = 0 ; j < rightSubArr.length ; j++) {
        if (arr[i - 1] < rightSubArr[j]) {
          [arr[i - 1], rightSubArr[j]] = [rightSubArr[j], arr[i - 1]];
          break;
        }
      }
      return Number([...arr.slice(0, i), ...rightSubArr].join(''));
    }
  }

  return -1;
}

console.log(nextBigger(5732651));

console.log("1" > "4");