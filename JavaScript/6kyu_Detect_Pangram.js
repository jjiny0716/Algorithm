function isPangram(string){
  return string.toLowerCase().split('').filter((char, index, arr) => /[a-zA-Z]/.test(char) && arr.indexOf(char) == index).length == 26;
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));

// others
function isPangram2(string){
  string = string.toLowerCase();
  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
    return string.indexOf(x) !== -1;
  });
}

function isPangram3(string){
  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}