function solution(n, works) {
  works.sort((a, b) => a - b);
  const total = works.reduce((prev, cur) => prev + cur, 0);
  if (total <= n) return 0;

  let acc = 0;
  let index = -1;
  for (let i = 0 ; i < works.length ; i++) {
    const curTotal = acc + works[i] * (works.length - i);
    const need = total - curTotal;
    if (need <= n) {
      n -= need;
      index = i;
      break;
    }

    acc += works[i];
  }

  let ans = 0;
  for (let i = 0 ; i < index ; i++) ans += works[i] ** 2;
  const remainElementCount = works.length - index;
  
  const [q, r] = [Math.floor(n / remainElementCount), n % remainElementCount];
  ans += (works[index] - q) ** 2 * (remainElementCount - r)
  ans +=  (works[index] - q - 1) ** 2 * r;

  return ans;
}

const n = 3, works = [1, 1];
console.log(solution(n, works));
