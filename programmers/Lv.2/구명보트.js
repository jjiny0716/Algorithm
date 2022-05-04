function solution(people, limit) {
  people.sort((a, b) => a - b);
  let i = 0, j = people.length - 1;
  let result = 0;
  while (i <= j) {
    const [light, heavy] = [people[i], people[j]];
    if (light + heavy <= limit) {
      i++;
      j--;
    }
    else {
      j--;
    }

    result++;
  }

  return result;
}

const people = [70, 80, 50];
const limit = 100;
console.log(solution(people, limit));