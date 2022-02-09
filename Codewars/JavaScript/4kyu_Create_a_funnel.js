class Funnel{
  constructor() {
    this.datas = Array.from({length: 5}, (v, k) => {
      return Array.from({length: k + 1}, () => " ");
    })
  }
  
  fill(...numbers) {
    for (let number of numbers) {
      if (!this.datas[4].includes(" ")) return;
      for (let row of this.datas) {
        const emptyPos = row.indexOf(" ");
        if (emptyPos === -1) continue;
  
        row[emptyPos] = number;
        break;
      }
    }
  }

  removeAndFill(y, x) {
    if (y == 4) return;
    
    const leftWeight = this.calWeight(y + 1, x);
    const rightWeight = this.calWeight(y + 1, x + 1);
    
    let nextY = y + 1, nextX = x;
    if (leftWeight < rightWeight) nextX++;
    
    this.datas[y][x] = this.datas[nextY][nextX];
    this.datas[nextY][nextX] = " ";
    this.removeAndFill(nextY, nextX);
  }

  drip() {
    const dropped = this.datas[0][0];
    this.removeAndFill(0, 0);
    
    return dropped !== " " ? dropped : null;
  }

  calWeight(y, x) {
    if (this.datas[y][x] === " ") return -1;
    let weight = 0;
    
    for (let i = 1 ; i < 5 - y ; i++) {
      for (let j = 0 ; j <= i ; j++) {
        if (this.datas[y + i][x + j] !== " ") weight++;
      }
    }

    return weight;
  }

  toString() {
    const rows = this.datas.map((data, i) => `${' '.repeat(4 - i)}\\${data.join(' ')}/`)
    const string = rows.reverse().join('\n');
    return string;
  }
}
const arr = [1, 2, 3];

const f = new Funnel();
// f.fill(1, 2, 3, 4, 5, 6);
// f.fill(1, 2, 3, 4, 5, 6);
// f.fill(1, 2, 3, 4, 5, 6);
// f.fill(1);
// console.log(f.toString());
// for (let i = 0 ; i < 14 ; i++) {
//   console.log(f.drip());
//   console.log(f.toString());
// }

f.fill(1,2,3,4,5,6,7,8,9,1,2,3,4,5,6);
f.drip();

console.log(f.toString());

f.fill(1, 2, 3, 4, 5, 6);
console.log(f.toString());