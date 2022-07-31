function toWeirdCase(string){
  return string.split(' ').map((word) => word.split('').map((char, i) => i % 2 === 0 ? char.toUpperCase() : char).join('')).join(' ');
}

const str = "Weird string case";
console.log(toWeirdCase(str));