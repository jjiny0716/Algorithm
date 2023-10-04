function solution(numbers) {
  if (numbers.every((number) => number === 0)) return "0";
  return numbers
    .map((number) => number.toString())
    .sort((a, b) => (a + b > b + a ? -1 : 1))
    .join("");
}
