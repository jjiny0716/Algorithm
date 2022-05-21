/**
 * @param {number[][]} customers
 * @return {number}
 */
 var averageWaitingTime = function(customers) {
  let orderFinishTime = 0;
  let totalWaitingTime = 0;
  
  for (let [arrival, time] of customers) {
    if (arrival >= orderFinishTime) {
      orderFinishTime = arrival + time;
      totalWaitingTime += time;
    }
    else {
      orderFinishTime = orderFinishTime + time
      totalWaitingTime += orderFinishTime - arrival;
    }
  }
  
  return totalWaitingTime / customers.length;
};

// 개선
var averageWaitingTime = function(customers) {
  let orderFinishTime = 0;
  let totalWaitingTime = 0;
  
  for (let [arrival, time] of customers) {
    orderFinishTime = Math.max(orderFinishTime, arrival) + time;
    totalWaitingTime += orderFinishTime - arrival;
  }
  
  return totalWaitingTime / customers.length;
};

const customers = [[1,2],[2,5],[4,3]];
console.log(averageWaitingTime(customers));