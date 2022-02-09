var uniqueInOrder=function(iterable) {
  const arr = typeof iterable === "string" ? iterable.split('') : iterable;
  return  arr.filter((char, i) => arr[i - 1] !== arr[i]);
}

console.log(uniqueInOrder('AAAABBBCCDAABBB'));

//other 
var uniqueInOrder2=function(iterable){
  return [...iterable].filter((a, i) => a !== iterable[i-1]);
}