function alphabetPosition(text) {
  return text.toLowerCase().split('').filter((char) => /[a-zA-Z]/.test(char)).map((char) => char.charCodeAt() - 'a'.charCodeAt() + 1).join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));

// others
function alphabetPosition2(text) {
  return text
    .toUpperCase()
    .match(/[a-z]/gi) // match?
    .map( (c) => c.charCodeAt() - 64)
    .join(' ');
}