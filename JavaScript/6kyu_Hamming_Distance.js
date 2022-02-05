function hamming(a,b) {
	let result = 0;
  for (let i = 0 ; i < a.length ; i++) 
    result += a[i] !== b[i] ? 1 : 0;
  
  return result;
}

console.log(hamming("I like turtles","I like turkeys"));