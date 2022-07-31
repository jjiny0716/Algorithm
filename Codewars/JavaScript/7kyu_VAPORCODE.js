function vaporcode(string) {
  return string.split('').filter((c) => c !== ' ').map((c) => c.toUpperCase()).join('  ');
}

const str = "Why isn't my code working?";
console.log(vaporcode(str));