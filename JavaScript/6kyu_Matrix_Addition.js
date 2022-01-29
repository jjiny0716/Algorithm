function matrixAddition(a, b){
  const n = a.length;

  for (let i = 0 ; i < n ; i++) {
    for (let j = 0 ; j < n ; j++) {
      a[i][j] += b[i][j];
    }
  }

  return a;
}

