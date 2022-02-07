function disemvowel(str) {
  return str.split('').filter(char => !"aeiouAEIOU".includes(char)).join("");
}
console.log(disemvowel("ASDASDZXCZXCQWEFGNTY"));