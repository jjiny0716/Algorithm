function countAndSort(target) {
  const m = new Map();
  const arrow = new Map();

  for (let y = 0 ; y < target.length ; y++) {
    for (let x = 0 ; x < target.length ; x++) {
      const char = target[y][x];
      if (char === '*') continue;
      
      let c = m.get(char.toLowerCase());
      if (!c) c = 0;
      
      const dy = Math.abs(y - (target.length - 1) / 2);
      const dx = Math.abs(x - (target.length - 1) / 2);
      const score = (target.length - 1) / 2 - (dy + dx - Math.min(dy, dx)) + 1;
      m.set(char.toLowerCase(), /[a-z]/.test(char) ? c + score: c + score * 2);
      
      c = arrow.get(char.toLowerCase());
      if (!c) c = 0;
      arrow.set(char.toLowerCase(), char == char.toLowerCase() ? c + 1 : c + 2);
    }
  }

  return Array.from(m).map((value) => [...value, arrow.get(value[0])]).sort((a, b) => {
    return a[1] == b[1] ? a[2] == b[2] ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[2] - a[2] : a[1] - b[1];
  }).map((value) => value[0]);
}

console.log(countAndSort([
  "z*B",
  "*a*",
  "**z"]));

  function countAndSort(target) {
    const C={}, S = target.length+1>>1
    target.forEach((row,i)=>[...row].forEach((c,j)=>{
      if(c=='*') return
      const score  = S - Math.max(Math.abs(S-1-i), Math.abs(S-1-j)) 
      const arrows = 1+/[A-Z]/.test(c)
      c = c.toLowerCase()
      C[c] = C[c]||[0,0]
      C[c][0] += score*arrows; C[c][1] += arrows;
    }))
    return Object.entries(C)
                 .sort((a,b)=>a[1][0]-b[1][0] || b[1][1]-a[1][1] || a[0].localeCompare(b[0]))
                 .map(x=>x[0])
  }