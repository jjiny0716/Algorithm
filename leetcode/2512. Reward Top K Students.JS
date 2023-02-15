/**
 * @param {string[]} positive_feedback
 * @param {string[]} negative_feedback
 * @param {string[]} report
 * @param {number[]} student_id
 * @param {number} k
 * @return {number[]}
 */
var topStudents = function (
  positive_feedback,
  negative_feedback,
  report,
  student_id,
  k
) {
  const positiveWordSet = new Set(positive_feedback);
  const negativeWordSet = new Set(negative_feedback);
  const reportToPoint = (report) =>
    report
      .split(" ")
      .map((word) => {
        if (positiveWordSet.has(word)) return 3;
        if (negativeWordSet.has(word)) return -1;
        return 0;
      })
      .reduce((total, point) => total + point);

  return report
    .map((report, index) => [reportToPoint(report), student_id[index]])
    .sort((a, b) => (a[0] === b[0] ? a[1] - b[1] : b[0] - a[0]))
    .slice(0, k)
    .map(([point, id]) => id);
};

const positive_feedback = ["smart", "brilliant", "studious"],
  negative_feedback = ["not"],
  report = ["this student is studious", "the student is smart"],
  student_id = [1, 2],
  k = 2;
console.log(
  topStudents(positive_feedback, negative_feedback, report, student_id, k)
);
