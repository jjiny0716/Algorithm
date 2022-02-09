function findMissingLetter(array) {
  for (let i = 0 ; i < array.length ; i++) 
    if (array[i].charCodeAt() !== array[0].charCodeAt() + i) return String.fromCharCode(array[0].charCodeAt() + i);
}

console.log(findMissingLetter(["a", "c"]));