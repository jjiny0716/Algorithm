function isPrime(n) {
  let isPrime = true;
  for (let i = 2 ; i * i<= n ; i++) {
    if (n % i == 0) isPrime = false;
  }
  return isPrime;
}
function isTwinPrime(n){
  if (n < 3) return false;
  return isPrime(n) && (isPrime(n - 2) || isPrime(n + 2));
}

console.log(isTwinPrime(5));

// others
// function isTwinPrime(n){
//   return (isPrime(n) && (isPrime(n-2) || isPrime(n+2)));
// }

// function isPrime(n) {
//   for (var i = 2; i < n; i++) if (n % i == 0) return false;
//   return n >= 2; 
// }