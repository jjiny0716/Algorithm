function findAnswer(m, index, firstAlphabets, alphaToDigits) {
  for (let i = 0 ; i < 10 ; i++) {
    if (i === 0 && firstAlphabets.includes(m[index][0])) continue;
    
    alphaToDigits[m[index][0]] = i;
    if (index + 1 == m.length) {
      if (!currentSum(m, index, alphaToDigits) && isAllDigitUnique(alphaToDigits)) return true;
      else continue;
    }
    
    if (maxSum(m, index) < -currentSum(m, index, alphaToDigits) || minSum(m, index) > -currentSum(m, index, alphaToDigits)) continue;
    const result = findAnswer(m, index + 1, firstAlphabets, alphaToDigits);
    if (result) return result;
  }

  return null;
}

function isAllDigitUnique(alphaToDigits) {
  const arr = Object.values(alphaToDigits);
  const set = new Set(arr);
  return arr.length === set.size;
}

function currentSum(m, index, alphaToDigits) {
  let sum = 0;
  for (let i = 0 ; i <= index ; i++) 
    sum += m[i][1] * alphaToDigits[m[i][0]]; 

  return sum;
}

function maxSum(m, index) {
  let sum = 0;
  for (let i = index + 1 ; i < m.length ; i++) 
    if (m[i][1] > 0) sum += m[i][1] * 9; 

  return sum;
}

function minSum(m, index) {
  let sum = 0;
  for (let i = index + 1 ; i < m.length ; i++) 
    if (m[i][1] < 0) sum += m[i][1] * 9; 
  
  return sum;
}

function alphametics(s){
  const m = new Map();
  let firstAlpabets = "";
  
	s.split(" ").forEach((word, index, words) => {
    if (word == "=" || word == "+") return;
    
    const sign = index == words.length - 1 ? -1 : 1;
    for (let i = 0 ; i < word.length ; i++) {
      if (i === 0) firstAlpabets += word[i];
      const alphaSum = m.get(word[i]);
      alphaSum !== undefined ? m.set(word[i], alphaSum + sign * Math.pow(10, (word.length - i - 1))) : m.set(word[i], sign * Math.pow(10, (word.length - i - 1)));
    }
  });
  
  const sortedM = Array.from(m).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
  const alphaToDigits = sortedM.reduce((obj, item) => {
    return {
      ...obj,
      [item[0][0]]: 0,
    };
  }, {});

  findAnswer(sortedM, 0, firstAlpabets, alphaToDigits);

  return s.split('').map(char => alphaToDigits[char] !== undefined ? alphaToDigits[char] : char).join(''); 
}

const str = "SEND + MORE = MONEY";
const str2 = "ELEVEN + NINE + FIVE + FIVE = THIRTY";
console.log(alphametics(str2));