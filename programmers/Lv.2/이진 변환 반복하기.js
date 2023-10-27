function solution(s) {
  const ans = [0, 0];
  const binaryTransform = (str) => {
    let count = 0;
    for (const c of str) {
      if (c === '1') count++;
      else ans[1]++;
    }
    return count.toString(2);
  }

  while (s !== '1') {
    s = binaryTransform(s);
    ans[0]++;
  }

  return ans;
}

const s = "110010101001";
console.log(solution(s));