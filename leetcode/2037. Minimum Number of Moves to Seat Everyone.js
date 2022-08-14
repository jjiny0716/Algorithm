/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
var minMovesToSeat = function(seats, students) {
  seats.sort((a, b) => a - b);
  students.sort((a, b) => a - b);

  return seats.reduce((total, seat, i) => total + Math.abs(seat - students[i]), 0);
};

const seats = [3,1,5], students = [2,7,4];
console.log(minMovesToSeat(seats, students));