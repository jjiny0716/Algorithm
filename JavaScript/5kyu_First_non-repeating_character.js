function firstNonRepeatingLetter(s) {
  const count = {};

  for (let char of s) {
    if (count[char.toLowerCase()] === undefined) count[char.toLowerCase()] = 0;
    count[char.toLowerCase()]++;
  }

  for (let char of s) {
    if (count[char.toLowerCase()] === 1) return char;
  }

  return "";
}

console.log(firstNonRepeatingLetter("stress"));
