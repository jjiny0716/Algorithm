/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function (rooms) {
  let visitCount = 0;

  function visitRoomsWithKey(roomNumber) {
    if (rooms[roomNumber] === false) return;
    
    visitCount++;
    const keys = [...rooms[roomNumber]];
    rooms[roomNumber] = false;
    for (let key of keys) visitRoomsWithKey(key);
  }
  visitRoomsWithKey(0);

  return visitCount === rooms.length;
};

const rooms = [[1,3],[3,0,1],[2],[0]];
console.log(canVisitAllRooms(rooms));