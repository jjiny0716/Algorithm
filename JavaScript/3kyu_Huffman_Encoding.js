class Node {
  constructor(left, right, char, count) {
    this.left = left;
    this.right = right;
    this.char = char;
    this.count = count;
  }
}

// takes: String; returns: [ [String,Int] ] (Strings in return value are single characters)
function frequencies(s) {
  const map = new Map();

  for (let c of s) {
    const count = map.get(c);
    if (count) map.set(c, count + 1);
    else map.set(c, 1);
  }
  //console.log(map);

  return Array.from(map);
}

// takes: [ [String,Int] ]; returns: Node
function makeTree(freqs) {
  const nodes = [];
  for (let freq of freqs) {
    nodes.push(new Node(null, null, freq[0], freq[1]));
  }

  while (nodes.length !== 1) {
    nodes.sort((a, b) => b.count - a.count);
    const childrens = nodes.splice(nodes.length - 2, 2);
    nodes.push(new Node(childrens[0], childrens[1], "", childrens[0].count + childrens[1].count));
  }

  return nodes[0];
}

// takes: Node, [], Object;
function getCodes(node, code, codes) {
  if (!node) return;

  code.push("0");
  getCodes(node.left, code, codes);
  code.pop();

  if (node.left === null) {
    codes[node.char] = code.join('');
    return;
  }

  code.push("1");
  getCodes(node.right, code, codes);
  code.pop();
}

// takes: [ [String,Int] ], String; returns: String (with "0" and "1")
function encode(freqs, s) {
  if (freqs.length < 2) return null;

  const root = makeTree(freqs);
  const codes = {};
  getCodes(root, [], codes);

  const result = []
  for (let c of s) result.push(codes[c]); 
  return result.join('');
}

// takes: [ [String, Int] ], String (with "0" and "1"); returns: String
function decode(freqs, bits) {
  if (freqs.length < 2) return null;
  
  const root = makeTree(freqs);
  const codes = {};
  getCodes(root, [], codes);

  const result = [];

  let node = root;
  for (let i = 0 ; i < bits.length ; i++) {
    if (bits[i] == 0) node = node.left;
    else node = node.right;
    if (!node.left) {
      result.push(node.char);
      node = root;
    }
  }

  return result.join('');
}

const s = "aaaabcc";
//console.log(frequencies(s));

//console.log(encode(frequencies(s), s));

console.log(decode(frequencies(s), encode(frequencies(s), s)));
