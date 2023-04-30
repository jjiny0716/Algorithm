/**
 * @param {number} k
 * @param {number} w
 * @param {number[]} profits
 * @param {number[]} capital
 * @return {number}
 */
var findMaximizedCapital = function(k, w, profits, capital) {
  const projects = [], n = profits.length;
  for (let i = 0 ; i < n ; i++) {
    projects.push({ 
      profit: profits[i],
      capital: capital[i],
    });
  }

  projects.sort((a, b) => a.capital - b.capital);
  const maxProfitQueue = new MaxPriorityQueue();

  i = 0;
  for (let j = 0 ; j < k ; j++) {
    while (i < n && projects[i].capital <= w) {
      maxProfitQueue.enqueue(projects[i].profit);
      i++;
    }
    
    if (maxProfitQueue.isEmpty()) break;
    w += maxProfitQueue.dequeue().element;
  }

  return w;
};

const k = 2, w = 0, profits = [1,2,3], capital = [0,1,1];
console.log(findMaximizedCapital(k, w, profits, capital));