function getMostProfitFromStockQuotes(quotes) {
  let result = 0, max = 0 ;

  for (let i = quotes.length - 1; i >= 0; i--) {
    if (quotes[i] > max) max = quotes[i];
    else result += max - quotes[i];
  }

  return result;
}

const arr = [1, 2, 10, 3, 2, 7, 3, 2];
console.log(getMostProfitFromStockQuotes(arr));
