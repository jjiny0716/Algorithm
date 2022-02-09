const removeConsecutiveDuplicates = s => {
  return s.split(' ').filter((word, index, words)=> words[index - 1] !== word).join(' ');
};

const s = "alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta";
console.log(removeConsecutiveDuplicates(s));