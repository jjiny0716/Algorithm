function solution(number, k) {
  const digits = number.split("").map((char) => Number(char));
  let result = "";

  for (let i = 0; i < digits.length; i++) {
    if (k === 0) {
      result += digits[i];
      continue;
    }

    let max = digits[i],
      maxIndex = i;

    for (let j = i; j < i + k + 1; j++) {
      if (digits[j] > max) {
        max = digits[j];
        maxIndex = j;
      }
    }

    result += max;

    k -= maxIndex - i;
    i = maxIndex;
  }

  return result.slice(0, result.length - k);
}


// stack
function solution(number, k) {
  const digits = number.split('').map((char) => Number(char));
  const stack = [digits[0]];
  
  for (let i = 1 ; i < digits.length ; i++) {
      while (stack[stack.length - 1] < digits[i] && k > 0) {
          stack.pop();
          k--;
      }

      stack.push(digits[i]);
  }
  
  return k === 0 ? stack.join('') : stack.slice(0, stack.length - k).join('');
}