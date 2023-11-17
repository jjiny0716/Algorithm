function solution(n, l, r) {
  l--, r--;
  const daq = (depth, index, bit) => {
    const remainDepth = n - depth;
    const rightIndex = index + (5 ** remainDepth) - 1;

    if (rightIndex < l || index > r) {
      console.log(depth, index);
      return 0;
    }
    if (index >= l && rightIndex <= r) return bit === 1 ? 4 ** remainDepth : 0;
    
    let ones = 0;
    for (let i = 0 ; i < 5 ; i++) {
      const nextIndex = index + (5 ** (remainDepth - 1)) * i;
      const nextBit = bit === 0 ? 0 : i === 2 ? 0 : 1;
      ones += daq(depth + 1, nextIndex, nextBit);
    }
    
    return ones;
  }
  return daq(0, 0, 1);
}

const n = 2, l = 4, r = 17;
console.log(solution(n, l, r));
