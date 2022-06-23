/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const numbers = [];
  for (let token of tokens) {
    if (token === "+") numbers.push(numbers.pop() + numbers.pop());
    else if (token === "-") numbers.push(-numbers.pop() + numbers.pop());
    else if (token === "*") numbers.push(numbers.pop() * numbers.pop());
    else if (token === "/") numbers.push(Math.trunc((1 / numbers.pop()) * numbers.pop()));
    else numbers.push(Number(token));
    console.log(numbers);
  }

  return numbers[0];
};

const tokens = ["10", "6", "9", "3", "+", "-11", "*", "/", "*", "17", "+", "5", "+"];
console.log(evalRPN(tokens));
