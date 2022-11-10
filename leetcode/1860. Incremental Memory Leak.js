/**
 * @param {number} memory1
 * @param {number} memory2
 * @return {number[]}
 */
var memLeak = function(memory1, memory2) {
  const memories = [memory1, memory2];
  for (let i = 1 ; ; i++) {
    const largerMemoryIndex = memories[0] >= memories[1] ? 0 : 1;
    if (memories[largerMemoryIndex] < i) return [i, ...memories];
    memories[largerMemoryIndex] -= i;
  }
};