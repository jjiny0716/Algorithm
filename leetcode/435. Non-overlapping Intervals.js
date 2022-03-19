/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  intervals.sort((a, b) => a[1] - b[1]);
  let count = 0;
  let curTime = intervals[0][0];
  for (let interval of intervals) {
    const [start, end] = interval;
    if (curTime <= start) {
      curTime = end;
      count++;
    }
    // else continue;
    // 위의 코드를 추가하면 270ms 에서 400ms가 넘게 걸리게 된다.. 왜인지 모르겠다. 검색해도 안나옴..
  }

  return intervals.length - count;
};

// const intervals = [[-52,31],[-73,-26],[82,97],[-65,-11],[-62,-49],[95,99],[58,95],[-31,49],[66,98],[-63,2],[30,47],[-40,-26]];
console.log(eraseOverlapIntervals(intervals));

// 문제를 반대로 생각하기 (몇개 삭제 => 몇개 남기기)
// remove를 최대한 적게 해서 스케쥴링 = 최대한 많이 선택해라. 
// => start, end를 둘다 고려해 정렬하면 안된다.
// => 왜냐하면 최대한 많이 고르기 위해선, 현재 고를수 있는 interval중에서 제일 일찍 끝나는걸 선택해야함
// => end로 정렬