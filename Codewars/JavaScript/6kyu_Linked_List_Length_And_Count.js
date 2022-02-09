function Node(data) {
  this.data = data;
  this.next = null;
}

function length(head) {
  let count = 0;
  for (let node = head ; node !== null; node = node.next, count++);
  return count;
}

function count(head, data) {
  let count = 0;
  for (let node = head ; node !== null; count += node.data == data ? 1 : 0, node = node.next);
  return count;
}