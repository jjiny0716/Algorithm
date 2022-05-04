function solution(orders, course) {
  orders = orders.map((order) => order.split('').sort().join('')).sort();
  const courseMenuMap = {};

  function getCourseMapByOrder(s, curIndex, combination, map) {
    if (combination.length >= 2) {
      const courseMenu = combination.join('');
      map[courseMenu] = (map[courseMenu] || 0) + 1;
    }

    if (curIndex >= s.length) return;

    for (let i = curIndex ; i < s.length ; i++) {
      getCourseMapByOrder(s, i + 1, [...combination, s[i]], map);
    }
  }

  for (let order of orders) {
    getCourseMapByOrder(order, 0, [], courseMenuMap);
  }

  const result = [];
  for (let menuCount of course) {
    let selectedCourseMenu = [];
    let maxOrderedMenuCount = 0;
    Object.entries(courseMenuMap).filter(([courseMenu]) => courseMenu.length === menuCount).forEach(([courseMenu, count]) => {
      if (count === 1) return;

      if (count > maxOrderedMenuCount) {
        selectedCourseMenu = [];
        maxOrderedMenuCount = count;
      }
      
      if (count === maxOrderedMenuCount) selectedCourseMenu.push(courseMenu);
    })
    result.push(...selectedCourseMenu);
  }

  return result.sort();
}

const orders = ["ABCDE", "AB", "CD", "ADE", "XYZ", "XYZ", "ACD"];
const course = [2,3,5];
console.log(solution(orders, course));