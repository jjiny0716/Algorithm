/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  let bill5 = 0, bill10 = 0;
  for (let bill of bills) {
    switch(bill) {
      case 5:
        bill5++; 
        break;
      case 10: 
        bill10++;
        bill5--;
        break;
      case 20: 
        if (bill10 >= 1) {
          bill10--;
          bill5--;
        }
        else bill5 -= 3;
        break;
    }

    if (bill5 < 0 || bill10 < 0) return false;
  }

  return true;
};

const bills = [5,5,10,10,20];
console.log(lemonadeChange(bills));