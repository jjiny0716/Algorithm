function solution(want, number, discount) {
  const wantMap = want.reduce((map, cur, index) => {
    map[cur] = number[index];
    return map;
  }, {});

  const check = () => {
    let isSame = false;
    if (Object.keys(wantMap).length !== Object.keys(curMap).length) return false;
    
    for (const key of Object.keys(wantMap)) {
      if (wantMap[key] !== curMap[key]) return false;
    }

    return true;
  }

  let ans = 0;
  const curMap = {};
  for (let i = 0 ; i < 10 ; i++) {
    curMap[discount[i]] = (curMap[discount[i]] || 0) + 1;
  }
  if (check()) ans++;

  for (let i = 0 ; i < discount.length - 10 ; i++) {
    curMap[discount[i + 10]] = (curMap[discount[i + 10]] || 0) + 1;
    curMap[discount[i]]--;
    if (curMap[discount[i]] === 0) delete curMap[discount[i]];
    if (check()) ans++;
  }

  return ans; 
}