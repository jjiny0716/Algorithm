/**
 * @param {string} text
 * @return {string}
 */
var arrangeWords = function(text) {
  const words = text.split(' ');
  words[0] = words[0].toLowerCase();
  words.sort((a, b) => a.length - b.length);

  words[0] = words[0].split('');
  words[0][0] = words[0][0].toUpperCase();
  words[0] = words[0].join('');
  
  return words.join(' ');
};

const text = "Keep calm and code on";
console.log(arrangeWords(text));