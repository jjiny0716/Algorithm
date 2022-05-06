function solution(absolutes, signs) {
  return absolutes.reduce((total, absolute, i) => total += signs[i] ? absolute : -absolute, 0);
}