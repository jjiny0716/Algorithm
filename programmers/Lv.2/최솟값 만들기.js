function solution(A,B){
  const n = A.length;
  A.sort((a, b) => a - b);
  B.sort((a, b) => b - a);
  let ans = 0;
  for (let i = 0 ; i < n ; i++) {
    ans += A[i] * B[i];
  }

  return ans;
}