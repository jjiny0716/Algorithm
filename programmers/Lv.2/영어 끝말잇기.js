function solution(n, words) {
  const set = new Set();
  for (let i = 0 ; i < words.length ; i++) {
    if (i !== 0 && (set.has(words[i]) || words[i - 1].charAt(words[i - 1].length - 1) !== words[i][0])) return [i % n + 1, Math.floor(i / n) + 1];
    set.add(words[i]);
  }
  
  return [0, 0];
}

const n = 2, words = ["hello", "one", "even", "never", "now", "world", "draw"];
console.log(solution(n, words));
