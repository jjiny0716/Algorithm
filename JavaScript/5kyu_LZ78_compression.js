function encoder(data) {
  const dictionary = {'': 0};
  let maxStrLen = 0;
  const resultArr = [];

  for (let i = 0 ; i < data.length ; i++) {
    for (let length = maxStrLen ; length >= 0; length--) {
      if (i + length > data.length) continue; 
      const subStr = data.substring(i, i + length);
      
      if (dictionary[subStr] !== undefined) {
        resultArr.push(dictionary[subStr] + (data[i + length] !== undefined ? data[i + length] : ""));

        const dicStr = subStr + data[i + length];
        dictionary[dicStr] = Object.keys(dictionary).length;

        maxStrLen = Math.max(maxStrLen, dicStr.length);
        i += length;
        break;
      }
    }

    console.log(dictionary);
  }

  return resultArr.join('');
}

function decoder(data) {
  const dictionary = ['']
  const letters = [];
  const numbers = [];
  let resultArr = [];
  
  letters.push(...data.split('').filter(letter => /[A-Z]/.test(letter)));
  numbers.push(...data.split(/[A-Z]/));
  console.log(letters);
  console.log(numbers);

  for (let i = 0 ; i < letters.length ; i++) {
    resultArr.push(dictionary[numbers[i]] + letters[i]);
    dictionary.push(dictionary[numbers[i]] + letters[i]);
  }

  if (letters.length + 1 === numbers.length) resultArr.push(dictionary[numbers.pop()]);

  return resultArr.join('');
}

console.log(encoder("ABAABABAABABAA"));
console.log(decoder("0A0B1A2A4A4B3"));

// A B AA BA BAA BAB AA
// https://www.codewars.com/kata/5db42a943c3c65001dcedb1a/solutions/javascript