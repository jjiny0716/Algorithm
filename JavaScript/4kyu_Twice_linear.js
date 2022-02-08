function dblLinear(n) {
  let u = [1];
  let i = 0;
  while (i <= n * Math.log10(n)) {
    u.push(u[i] * 2 + 1);
    u.push(u[i] * 3 + 1);
    i++;
  }
  u = Array.from(new Set(u));
  u.sort((a, b) => a - b);
  // 무작정 다 넣고 sort를 돌리니.. O(nlogn)
  // 운이 좋아서 풀린듯.

  return u[n];
}

console.log(dblLinear(100))

// others
function dblLinear2(n) {
  var ai = 0, bi = 0, eq = 0;
  var sequence = [1];
  // 굳이 ai bi eq를 따로쓰지 않고,, i 하나만 써도 될 것같은데.?
  while (ai + bi < n + eq) {
    // 비교를 하면서 작은 것부터 순서대로 쌓아가니 정렬도 필요없고. O(n) 
    var y = 2 * sequence[ai] + 1;
    var z = 3 * sequence[bi] + 1;
    if (y < z) { sequence.push(y); ai++; }
    else if (y > z) { sequence.push(z); bi++; }
    else { sequence.push(y); ai++; bi++; eq++; }
  }
  // n에 맞춰서 순서대로 쌓아왔으니 pop하면 끝
  return sequence.pop();
}