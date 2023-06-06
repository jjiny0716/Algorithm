/**
 * @param {number[]} encoded
 * @return {number[]}
 */
var decode = function(encoded) {
  let permXor = 1;
  for (let i = 2 ; i <= encoded.length + 1 ; i++) permXor ^= i;

  for (let i = 1 ; i < encoded.length ; i += 2) permXor ^= encoded[i];

  const perm = [permXor];
  for (let i = 0 ; i < encoded.length ; i++) {
    perm.push(perm.at(-1) ^ encoded[i]);
  }

  return perm;
};

001
010
011
100
101

const encoded = [6,5,4,6];
console.log(decode(encoded));