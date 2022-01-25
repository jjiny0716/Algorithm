function john(n) {
  const result = [];
  const jArr = [];
  const aArr = [];
  for (let i = 0 ; i < n ; i++) result.push(j(i, jArr, aArr));
  return result; 
}
function ann(n) {
  const result = [];
  const jArr = [];
  const aArr = [];
  for (let i = 0 ; i < n ; i++) result.push(a(i, jArr, aArr));
  return result; 
}
function j(n, jArr, aArr) {
  if (n == 0) return 0;
  const t = jArr[n - 1] || j(n - 1, jArr, aArr);
  jArr[n - 1] = t;

  return n - a(t, jArr, aArr);
}
function a(n, jArr, aArr) {
  if (n == 0) return 1;
  const t = aArr[n - 1] || a(n - 1, jArr, aArr);
  aArr[n - 1] = t;

  return n - j(t, jArr, aArr);
}

function sumJohn(n) {
  return john(n).reduce((a, b) => a + b, 0);
}

function sumAnn(n) {
  return ann(n).reduce((a, b) => a + b, 0);
}

//console.log(ann(120));
//console.log(john(142));
//console.log(sumAnn(40));
console.log(ann(1000));


