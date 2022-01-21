function oddRow(n) {
  const first = (n - 1) * n + 1;
  const result = [];
  for (let i = 0 ; i < n ; i++) result.push(first + i * 2); 
  return result;
}

console.log(oddRow(5));

// others
function oddRow2(n) {
  return Array(n).fill(0).map((_,i)=>n*n-n+1+i*2);
}