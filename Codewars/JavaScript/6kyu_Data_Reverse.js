function dataReverse(data) {
  const dataStr = data.join('');
  const result = [];
  for (let i = 0 ; i < data.length ; i += 8) {
    result.push(dataStr.substring(i, i + 8));
  }

  return result.reverse().join('').split('').map((char) => Number(char));
}

console.log(dataReverse([1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,0,1,0,1,0]));