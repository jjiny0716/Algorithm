function solution(n) {
  const result = [];
  while (n) {
    switch((n - 1) % 3) {
      case 0:
        result.push("1"); 
        break;
      case 1:
        result.push("2"); 
        break;
      case 2:
        result.push("4"); 
        break;
    }
    n = Math.floor((n - 1) / 3);
  }

  return result.reverse().join('');
}


for (let i = 1 ; i < 11 ; i++) {
  console.log(solution(i));
}
