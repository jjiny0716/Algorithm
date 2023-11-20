/**
 * @param {string[][]} access_times
 * @return {string[]}
 */
var findHighAccessEmployees = function(access_times) {
  const timeTable = new Map();
  for (const [employee, time] of access_times) {
    if (!timeTable.has(employee)) timeTable.set(employee, []);
    timeTable.get(employee).push(time);
  }
  
  const highAccessEmployees = [];
  for (const [employee, times] of timeTable.entries()) {
    if (times.length < 3) continue;
    const sortedMinutes = times.sort().map((timeString) => Number(timeString.slice(0, 2)) * 60 + Number(timeString.slice(2, 4)));
    let isHighAccess = false;
    for (let i = 2 ; i < sortedMinutes.length ; i++) {
      if (sortedMinutes[i] < sortedMinutes[i - 2] + 60) {
        isHighAccess = true;
        break;
      }
    }
    
    if (isHighAccess) highAccessEmployees.push(employee);
  }
  
  return highAccessEmployees;
};

const access_times = [["d","0002"],["c","0808"],["c","0829"],["e","0215"],["d","1508"],["d","1444"],["d","1410"],["c","0809"]];
console.log(findHighAccessEmployees(access_times));