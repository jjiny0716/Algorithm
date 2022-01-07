function alternateCase(s) {
  return s.split('').map((char) => {
    if (char === char.toLowerCase()) return char.toUpperCase();
    else return char.toLowerCase();
  }).join('');
}

console.log(alternateCase("AdSf"));