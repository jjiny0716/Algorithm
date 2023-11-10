class Queue {
  constructor() {
    this.store = {};
    this.front = 0;
    this.rear = 0;
  }

  size() {
    if (this.store[this.rear] === undefined) {
      return 0;
    } else {
      return this.rear - this.front + 1;
    }
  }

  push(value) {
    if (this.size() === 0) {
      this.store['0'] = value;
    } else {
      this.rear += 1;
      this.store[this.rear] = value;
    }
  }

  popleft() {
    let temp;
    if (this.front === this.rear) {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front = 0;
      this.rear = 0;
      return temp;
    } else {
      temp = this.store[this.front];
      delete this.store[this.front];
      this.front += 1;
      return temp;
    }
  }
}

function solution(order) {
  const queue = new Queue();
  for (let i = 1 ; i <= order.length ; i++) queue.push(i);
  const stack = [];
  
  let orderIndex = 0;
  while (queue.size()) {
    stack.push(queue.popleft());
    while (stack.length && stack.at(-1) === order[orderIndex]) {
      stack.pop();
      orderIndex++;
    }
  }
  
  return orderIndex;
}

const order = [4, 3, 1, 2, 5];
console.log(solution(order));
