/**
 * Definition for Employee.
 * function Employee(id, importance, subordinates) {
 *     this.id = id;
 *     this.importance = importance;
 *     this.subordinates = subordinates;
 * }
 */

/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const idMap = new Map();
  for (let { id, importance, subordinates } of employees) {
    idMap.set(id, { importance, subordinates });
  }

  function getImportanceOfTarget(id) {
    const target = idMap.get(id);
    return target.importance + target.subordinates.reduce((sum, childId) => sum += getImportanceOfTarget(childId), 0); 
  }

  return getImportanceOfTarget(id);
};

const employees = [[1,5,[2,3]],[2,3,[]],[3,3,[]]], id = 1;


// 개선
/**
 * @param {Employee[]} employees
 * @param {number} id
 * @return {number}
 */
var GetImportance = function(employees, id) {
  const idMap = {};
  for (let employee of employees) {
    idMap[employee.id] = employee;
  }

  function getImportanceOfTarget(id) {
    const target = idMap[id];
    return target.importance + target.subordinates.reduce((sum, childId) => sum += getImportanceOfTarget(childId), 0); 
  }

  return getImportanceOfTarget(id);
};
