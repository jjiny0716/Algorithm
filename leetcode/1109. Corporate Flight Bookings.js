/**
 * @param {number[][]} bookings
 * @param {number} n
 * @return {number[]}
 */
var corpFlightBookings = function (bookings, n) {
  const startSeatMap = {}, endSeatMap = {};
  for (let [start, end, seat] of bookings) {
    startSeatMap[start] = (startSeatMap[start] || 0) + seat;
    endSeatMap[end] = (endSeatMap[end] || 0) + seat;
  }
  const result = new Array(n);
  let curSeat = 0;
  for (let i = 0 ; i < n ; i++) {
    curSeat += startSeatMap[i + 1] || 0; 
    result[i] = curSeat;
    curSeat -= endSeatMap[i + 1] || 0;
  }
  return result;
};

const bookings = [[1,2,10],[2,3,20],[2,5,25]], n = 5;


// 조금의 개선
var corpFlightBookings2 = function (bookings, n) {
  const seatMap = {};
  for (let [start, end, seat] of bookings) {
    seatMap[start] = (seatMap[start] ?? 0) + seat;
    seatMap[end + 1] = (seatMap[end + 1] ?? 0) - seat;
  }
  const result = new Array(n);
  let curSeat = 0;
  for (let i = 0 ; i < n ; i++) {
    curSeat += seatMap[i + 1] ?? 0;
    result[i] = curSeat;
  }
  return result;
};

console.log(corpFlightBookings2(bookings, n));