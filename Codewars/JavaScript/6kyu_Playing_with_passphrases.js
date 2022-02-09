function shiftLetter(char, n) {
  return String.fromCharCode((char.toLowerCase().charCodeAt() - 97 + n) % 26 + 97);
}

function playPass(s, n) {
  return s.split('').map(char => {
    if (/[a-z]/i.test(char)) return shiftLetter(char, n);
    else if (/[0-9]/.test(char)) return 9 - char;
    else return char;
  }).map((char, index) => {
    if (/[a-z]/i.test(char)) {
      if (index % 2 === 0) return char.toUpperCase();
      if (index % 2 === 1) return char.toLowerCase();
    }
    else return char;
  }).reverse().join('');
}

const s = "I LOVE YOU!!!";
console.log(playPass(s, 1));