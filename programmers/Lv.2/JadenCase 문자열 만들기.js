function solution(s) {
  return s.split(' ').map((word) => word.slice(0, 1).toUpperCase() + word.slice(1, word.length).toLowerCase()).join(' ');
}