/**
 * @param {number} n
 * @param {number[][]} logs
 * @param {number} x
 * @param {number[]} queries
 * @return {number[]}
 */
var countServers = function(n, logs, x, queries) {
  const minQueryTime = Math.min(...queries);
  const maxQueryTime = Math.max(...queries);

  const endTimes = queries.reduce((map, query, i) => {
    map.set(query, i);
    return map;
  }, new Map());

  const serverLogs = logs.sort((a, b) => a[1] - b[1]).reduce((map, [serverId, time]) => {
    if (!map.has(serverId)) map.set(serverId, new Set());
    map.get(serverId).add(time);
    return map;
  }, new Map());
  for (let i = 1 ; i <= n ; i++) {
    if (!serverLogs.has(i)) serverLogs.set(i, new Set());
  }

  const result = new Array(queries.length).fill(0);

  for (const serverId of serverLogs.keys()) {
    const timeSet = serverLogs.get(serverId);
    let requestCount = 0;
    let s = minQueryTime - x, e = minQueryTime;

    for (let i = s ; i <= e ; i++) {
      if (timeSet.has(i)) requestCount++;
    }

    while (e <= maxQueryTime) {
      if (endTimes.has(e) && requestCount === 0) result[endTimes.get(e)]++;

      if (timeSet.has(s++)) requestCount--;
      if (timeSet.has(++e)) requestCount++;
    }
  }

  return result;
};

const n = 3, logs = [[1,3],[2,6],[1,5]], x = 5, queries = [10,11];
console.log(countServers(n, logs, x, queries));