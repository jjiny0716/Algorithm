function solution(numbers) {
  return numbers.map((number) => {
    const bits = ('0' + number.toString(2)).split('');
    for (let i = bits.length - 1 ; i >= 0 ; i--) {
      if (bits[i] === '0') {
        bits[i] = '1';
        if (i !== bits.length - 1) bits[i + 1] = '0';
        break;
      }
    }
    return parseInt(bits.join(''), 2);
  });
}

const numbers = [2, 7];
console.log(solution(numbers));


// 00