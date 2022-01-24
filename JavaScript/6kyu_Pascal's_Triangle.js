function pascal(depth) {
  const t = [[1]];
  
  for (let i = 1 ; i < depth ; i++) {
    t.push([]);
    for (let j = 0 ; j <= i ; j++) {
      const left = t[i - 1][j - 1] || 0;
      const right = t[i - 1][j] || 0;
      t[i].push(left + right);
    }
  }

  return t;
}

console.log(pascal(5));

// other
function pascal2(depth) {
  var result = []
  for (var i = 1; i <= depth; ++i) {
    var row = [] // row를 만들고 집어넣기 vs row를 채워넣고 집어넣기?
    for (var j = 0; j < i; ++j) {
      row.push(j == 0 || j == i - 1 ? 1 : result[i-2][j-1] + result[i-2][j])
    }
    result.push(row)
  }
  return result
}