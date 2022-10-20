/**
 * @param {number[][]} items
 * @param {number[]} queries
 * @return {number[]}
 */
var maximumBeauty = function (items, queries) {
  let maxBeauty = 0;
  const sortedItems = items.sort((a, b) => a[0] === b[0] ? b[1] - a[1] : a[0] - b[0]).filter(([price, beauty], i, items) => {
    maxBeauty = Math.max(maxBeauty, beauty);
    return i === 0 || beauty >= maxBeauty;
  });

  return queries.map((query) => {
    let i = 0, j = sortedItems.length - 1;
    while (i < j) {
      const mid = Math.floor((i + j) / 2);
      const price = sortedItems[mid][0];
      if (price < query) {
        i = mid + 1;
      }
      else if (price > query) {
        j = mid - 1;
      }
      else {
        i = mid;
        break;
      }
    }

    return query < sortedItems[i][0] ? (i === 0 ? 0 : sortedItems[i - 1][1]) : sortedItems[i][1];
  });
};

const items = [[193,732],[781,962],[864,954],[749,627],[136,746],[478,548],[640,908],[210,799],[567,715],[914,388],[487,853],[533,554],[247,919],[958,150],[193,523],[176,656],[395,469],[763,821],[542,946],[701,676]]
  queries = [885,1445,1580,1309,205,1788,1214,1404,572,1170,989,265,153,151,1479,1180,875,276,1584];
console.log(maximumBeauty(items, queries));
