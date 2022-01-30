function arrange(strng) {
  const words = strng.split(' ');

  for (let i = 0 ; i < words.length - 1; i++) {
    if (i % 2 === 0 && words[i].length > words[i + 1].length) {
      [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
    else if (i % 2 === 1 && words[i].length < words[i + 1].length) {
      [words[i], words[i + 1]] = [words[i + 1], words[i]];
    }
  }

  return words.map((word, index) => {return index % 2 === 0 ? word.toLowerCase() : word.toUpperCase()}).join(' ');
}

const str = "A a s d f g g h ";
console.log(arrange(str));

