function solution(enroll, referral, seller, amount) {
  const peopleMap = {
    "-": {
      parent: null,
      profit: 0,
    },
  };

  for (let person of enroll) {
    peopleMap[person] = {
      parent: null,
      profit: 0,
    };
  }

  for (let i = 0; i < referral.length; i++) {
    const parent = referral[i];
    const child = enroll[i];
    peopleMap[parent].children.push(child);
  }

  for (let i = 0; i < seller.length; i++) {
    const sellerName = seller[i];
    const sellerProfit = amount[i] * 100;
    peopleMap[sellerName].profit += sellerProfit;

    let person = sellerName;
    let distributedProfit = sellerProfit;
    while (peopleMap[person].parent !== null && distributedProfit !== 0) {
      distributedProfit = Math.floor(distributedProfit / 10);
      peopleMap[person].profit -= distributedProfit;
      person = peopleMap[person].parent;
      peopleMap[person].profit += distributedProfit;
    }
  }

  return enroll.map((person) => peopleMap[person].profit);
}
