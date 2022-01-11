function isConstructable(a)
{
  let i = 1;
  for (i ; i * i <= a ; i++) {
    console.log(i);
    if (Number.isInteger(Math.sqrt(a - i * i)) && Number.isInteger(Math.sqrt(i * i))) return true;
  }

  return false;
}

console.log(isConstructable(242))

// others
function isConstructable2(a) {
  for ( let i=1; i*i<=a; i++ )
    if ( Number.isInteger(Math.sqrt(a-i*i)) )
      return true;
  return false;
}