function withdraw(n) {
  const answer = [Math.floor(n / 100), Math.floor(n % 100 / 50), n % 100 % 50 / 20];
  if (answer[2] % 1 !== 0) {
    if (answer[1] !== 0) {
      answer[2] += 2.5;
      answer[1] -= 1;
    }
    else {
      answer[2] += 2.5;
      answer[1] += 1;
      answer[0] -= 1;
    }
  }
  
  return answer;
}
 
console.log(withdraw(260));

// other
function withdraw2(n) {
  const bills = [0, 0, 0];
  while (n % 50) {
      bills[2]++;
      n -= 20;
  }

  bills[0] = Math.floor(n / 100);
  bills[1] = Math.floor((n % 100) / 50);

  return bills;
}