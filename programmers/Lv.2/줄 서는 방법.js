function solution(n, k) {
  k--;
  const nums = Array.from({ length: n }, (_, i) => i + 1);
  const ans = [];
  let width = 1;
  for (let i = 2 ; i <= n ; i++) width *= i;
  for (let i = n ; i > 1 ; i--) {
    const slice = width / i;
    for (let j = 0 ; j < i ; j++) {
      if (k >= j * slice && k < (j + 1) * slice) {
        ans.push(nums.splice(j, 1)[0]);
        k -= j * slice;
        break;
      }
    }

    width /= i;
  }
  ans.push(nums[0]);

  return ans;
}

const n = 4, k = 3; // [1, 3, 4, 2]
console.log(solution(n, k));

// 000 000 000 000
// 000 000 
// 