/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// 정렬 이용 O(nlog(n))
var kClosest = function (points, k) {
  function getDistanceFromOrigin(x, y) {
    return x**2 + y**2;
  }
  return points.map(([x, y]) => [x, y, getDistanceFromOrigin(x, y)]).sort((a, b) => a[2] - b[2]).splice(0, 1).map(([x, y]) => [x, y]);
};

const  points = [[1,3],[-2,2]], k = 1;
console.log(kClosest(points));