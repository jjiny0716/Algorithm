/**
 * @param {number[]} customers
 * @param {number[]} grumpy
 * @param {number} minutes
 * @return {number}
 */
var maxSatisfied = function (customers, grumpy, minutes) {
  const n = customers.length;
  let result = 0;
  let maxCustomersWhenSecretTechnique = 0;
  let customerCount = 0;
  for (let i = 0 ; i < n; i++) {
    if (grumpy[i] === 1) customerCount += customers[i];
    else result += customers[i];
    if (grumpy[i - minutes] === 1) customerCount -= customers[i - minutes];
    maxCustomersWhenSecretTechnique = Math.max(maxCustomersWhenSecretTechnique, customerCount);
  }
  
  return result + maxCustomersWhenSecretTechnique;
};

const customers = [1,0,1,2,1,1,7,5], grumpy = [0,1,0,1,0,1,0,1], minutes = 3;
console.log(maxSatisfied(customers, grumpy, minutes));