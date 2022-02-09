function formatWords(words){
  if (!words) return "";
  
  const filtered = words.filter(word => word.length > 0);
  if (filtered.length === 1) return filtered[0];
  
  return filtered.reduce((sentence, word, index, arr) =>{
    if (index === arr.length - 1) return sentence + ` and ${word}`;
    else if (index === 0) return sentence + word;
    else return sentence + `, ${word}`;
  }, "");
}

console.log(formatWords([]));