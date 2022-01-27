function order(words){
  return words.split(' ').map(value => {
    return {
      string: value, 
      number: /[0-9]/.exec(value)[0]
    }}
  ).sort((a, b) => a.number - b.number).map(value => value.string).join(' ');
}

const test = "is2 Thi1s T4est 3a";
console.log(/[0-9]/.exec(test));
console.log(order(test));