/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function(tickets, k) {
  let result = 0;
  for (let i = 0 ; i <= k ; i++) {
    if (tickets[i] > tickets[k]) result += tickets[k];
    else result += tickets[i];
  }

  for (let i = k + 1 ; i < tickets.length ; i++) {
    if (tickets[i] >= tickets[k]) result += tickets[k] - 1;
    else result += tickets[i];
  }

  return result;
};

const tickets = [2,3,2], k = 2;
console.log(timeRequiredToBuy(tickets, k));