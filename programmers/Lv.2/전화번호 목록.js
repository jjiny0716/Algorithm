function solution(phone_book) {
  const set = new Set();
  for (const phone of phone_book) {
    for (let i = 1 ; i < phone.length ; i++) {
      set.add(phone.slice(0, i));
    }
  }

  for (const phone of phone_book) {
    if (set.has(phone)) return false;
  }

  return true;
}

