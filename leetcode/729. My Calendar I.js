var MyCalendar = function () {
  this.bookList = [];
};

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
  if (this.bookList.length === 0) this.bookList.push([start, end]);
  // find position
  let left = 0;
  let right = this.bookList.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (this.bookList[mid][1] < start) left = mid + 1;
    else if (this.bookList[mid][1] > start) right = mid - 1;
    else break;
  }
  const pos = left;
  if (end < this.bookList[pos + 1][0]) this.bookList.splice(pos, 0, [start, end]);
  else return false;
  return true;
};

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

const c = new MyCalendar();
console.log(c.book());
