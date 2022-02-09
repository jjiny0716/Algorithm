class Node {
  constructor(data, parent = null) {
    this.data = data;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
}

function makeNode(amount, turn, parent) {
  let newData = [...parent.data];
  newData[turn] += amount;
  newNode = new Node(newData, parent);
  return newNode;
}

function makeTree(g, turn, parent) {
  if (g.length === 1) {
    const left = makeNode(g[0], turn, parent) // choose left gold
    parent.left = left;
    parent.right = null;
    return;
  }

  const left = makeNode(g[0], turn, parent) // choose left gold
  parent.left = left;

  const right = makeNode(g[g.length - 1], turn, parent); // choose right gold;
  parent.right = right;

  turn = turn === 0 ? 1 : 0;
  let newG = g.slice(-g.length + 1);
  makeTree(newG, turn, left);
  newG = g.slice(0, g.length - 1);
  makeTree(newG, turn, right);

  if (getResult(left)[turn] > getResult(right)[turn]) parent.left = null;
  else parent.right = null;
}

function removeBadStrategyBranch(root, depth) {
  let currentNode = root;
  for (let i = 0 ; i < depth ; i++) {
    currentNode = currentNode.left;
  }


}

function getResult(node) {
  if (node.left === null && node.right === null) return node.data;
  if (node.left === null) return getResult(node.right);
  else return getResult(node.left); 
}

function distributionOf(g){
  const root = new Node([0, 0], null);
  makeTree(g, 0, root);
  //inorder(root);

  return getResult(root);
}

function inorder(node) {
  if (node === null) return;

  console.log(node.data);
  inorder(node.left);
  //if (node.left == null && node.right == null) console.log(node.data);
  
  inorder(node.right);
}

const test = [280,819,823,938,472,904,528,187,905,268,967,634,788,885,834,836,961,421,378,431,527,595,936,188,853];
console.time("timer");
console.log(distributionOf(test));
console.timeEnd("timer");
