function solution(cards) {
  const n = cards.length;
  const opened = new Array(n + 1).fill(false);
  const groups = [];
  
  for (let i = 0 ; i < n ; i++) {
    let curIndex = cards[i] - 1;
    if (opened[curIndex]) continue;
    
    let size = 0;
    while (!opened[curIndex]) {
      opened[curIndex] = true;
      curIndex = cards[curIndex] - 1;
      size++;
    }
    
    groups.push(size);
  }

  if (groups.length === 1) return 0;
  groups.sort((a, b) => b - a);
  return groups[0] * groups[1];
}

const cards = [8,6,3,7,2,5,1,4];
console.log(solution(cards));