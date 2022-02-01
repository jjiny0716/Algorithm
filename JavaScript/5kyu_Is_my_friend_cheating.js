function removeNb (n) {
  const sumFrom1 = (n * (n + 1)) / 2;
  const result = [];
  for (let i = 1 ; i <= n ; i++) {
    let left = 1;
    let right = n;
    let mid = 0;
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (sumFrom1 - i - mid === i * mid) {
        result.push([i, mid]); 
        break;
      }
      else if (sumFrom1 - i - mid <= i * mid) right = mid - 1;
      else left = mid + 1;
    }
  }

  return result;
}

console.log(removeNb(26));


//sumFrom1 - i - j === i * j