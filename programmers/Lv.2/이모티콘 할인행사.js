function solution(users, emoticons) {
  let ans = [0, 0];
  const dfs = (sales, i) => {
    let emoticonPlus = 0;
    let money = 0;
    for (const [minSale, minMoney] of users) {
      let buyAmount = 0;
      for (let i = 0 ; i < emoticons.length ; i++) {
        if (sales[i] >= minSale) {
          buyAmount += emoticons[i] * (100 - sales[i]) / 100;
        }
        if (buyAmount >= minMoney) {
          break;
        }
      }

      if (buyAmount >= minMoney) emoticonPlus++;
      else money += buyAmount;
    }

    if (emoticonPlus > ans[0]) ans = [emoticonPlus, money];
    else if (emoticonPlus === ans[0] && money > ans[1]) ans = [emoticonPlus, money];


    if (sales[i] === 40) return;
    sales[i] += 10;
    dfs(sales, i);
    if (i !== emoticons.length - 1) dfs(sales, i + 1);
    sales[i] -= 10;
  }  
  dfs(new Array(emoticons.length).fill(0), 0);

  return ans;
}

const users = [[40, 10000], [25, 10000]], emoticons = [7000, 9000];
console.log(solution(users, emoticons));