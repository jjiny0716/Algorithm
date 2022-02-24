/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  for (let h = triangle.length - 1 ; h >= 1 ; h--) {
    console.log(triangle[h]);
    for (let i = 0 ; i < triangle[h].length - 1 ; i++) {
      triangle[h - 1][i] += Math.min(triangle[h][i], triangle[h][i + 1]);
    }
  }

  return triangle[0][0];
};

triangle = [[2],[3,4],[6,5,7],[4,1,8,3]]
console.log(minimumTotal(triangle));