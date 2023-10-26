function solution(lines) {
  lines = lines.map((line) => {
    const [ymd, hms, elapsed] = line.split(' ');
    const [h, m, s] = hms.split(':');
    const [realS, ms] = s.split('.');
    let end = 0;
    end += h * 60 * 60 * 1000;
    end += m * 60 * 1000;
    end += realS * 1000;
    end += ms * 1;
    let start = end - Number(elapsed.slice(0, elapsed.length - 1)) * 1000 + 1;
    return {
      start,
      end,
    }
  });

  let ans = 0;
  for (const { start, end } of lines) {
    let s = end, e = end + 999;
    let count = 0;
    for (const line of lines) {
      if (line.end < s || line.start > e) continue;
      count++;
    }
    ans = Math.max(ans, count);

    s = start - 999 , e = start;
    count = 0;
    for (const line of lines) {
      if (line.end < s || line.start > e) continue;
      count++;
    }
    ans = Math.max(ans, count);
  }

  return ans;
}

const lines = 	["2016-09-15 01:00:04.001 2.0s", "2016-09-15 01:00:07.000 2s"];
console.log(solution(lines));
