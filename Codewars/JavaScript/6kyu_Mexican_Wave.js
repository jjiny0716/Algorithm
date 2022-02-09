function wave(str){
  const result = [];
  
  for (let i = 0 ; i < str.length ; i++) {
    result.push(str.split('').map((char, idx) => idx === i ? char.toUpperCase() : char).join(''));
  }

  return result;
}


const str = "codewars";
console.log(wave(str));