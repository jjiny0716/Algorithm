const countBits = (n) => [...n.toString(2)].reduce((count, bit) => count += bit === '1' ? 1 : 0, 0);
console.log(countBits(1234));