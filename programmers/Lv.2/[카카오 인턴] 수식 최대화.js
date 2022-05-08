function solution(expression) {
  let max = 0;

  const numbers = expression.split(/[\+\-\*]/);
  const operands = expression.replace(/[0-9]/g, "").split("");
  const usedOperands = [...new Set(operands)];

  makeOperandCombination();

  function makeOperandCombination(combination = []) {
    if (combination.length === usedOperands.length) {
      getResultWithCustomOperandOrder(combination);
      return;
    }

    for (let operand of usedOperands) {
      if (combination.includes(operand)) continue;
      makeOperandCombination([...combination, operand]);
    }
  }

  function getResultWithCustomOperandOrder(operandOrder) {
    const numbers2 = [...numbers];
    const operands2 = [...operands];

    for (let operand of operandOrder) {
      for (let i = 0; i < numbers2.length; i++) {
        if (operands2[i] !== operand) continue;

        const a = Number(numbers2[i])
        const b = Number(numbers2[i + 1]);

        // eval 사용하면 단축 가능하긴 한데.. 보안 문제?
        if (operands2[i] === "+") {
          numbers2.splice(i, 2, a + b);
        } else if (operands2[i] === "-") {
          numbers2.splice(i, 2, a - b);
        } else if (operands2[i] === "*") {
          numbers2.splice(i, 2, a * b);
        }
        operands2.splice(i, 1);
        i--;
      }
    }

    const result = numbers2[0];
    max = Math.max(max, Math.abs(result));
  }

  return max;
}
