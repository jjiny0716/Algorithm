function meeting(x, need) {
  if (need === 0) return "Game On";
  
  const result = [];
  let sum = 0;
  for (let room of x) {
    const available = room[1] - room[0].length;
    if (available < 0) available = 0;
    if (available > need) available = need;
    result.push(available);
    sum += available;
  }
  
  return sum >= need ? result : "Not enough!";
}

console.log(meeting([['XXX', 3], ['XXXXX', 6], ['XXXXXX', 9]], 4));

// others
function meeting2(rooms, need) {
  if (need <= 0) {
    return 'Game On';
  }
  const taken = [];
  for (const [{ length: chairs }, people] of rooms) {
    const take = Math.min(Math.max(people - chairs, 0), need); // !!!!
    taken.push(take)
    need -= take;
    if (need <= 0) {
      return taken;
    }
  }
  return 'Not enough!';
}