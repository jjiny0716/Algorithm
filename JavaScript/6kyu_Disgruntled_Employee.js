function off(n) {
  const arr = [];
  for (let i = 1 ; i <= Math.sqrt(n); i++) arr.push(i ** 2);
  return arr;
}

console.log(off(12155));



// function off(n) {
//   const switches = new Array(n).fill(1);
  
//   for (let i = 1 ; i <= n ; i++) {
//     for (let j = 0 ; j < n ; j++) {
//       if ((j + 1) % i == 0) switches[j] *= -1;
//     }
//   }
  
//   return switches.reduce((result, value, index) => { 
//     if (value == -1) result.push(index + 1);
//     return result;
//   }, [])
// }


// other
function off2(n) {  
  return Array.apply(0, Array(Math.sqrt(n) | 0)).map(function(_,a){ return ++a * a; });
}