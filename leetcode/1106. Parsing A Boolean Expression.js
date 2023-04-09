/**
 * @param {string} expression
 * @return {boolean}
 */
var parseBoolExpr = function (expression) {
  const parseExpToSubExp = (exp) => {
    let depth = 0;
    let lastIndex = 1;
    const result = [];
    for (let i = 2; i < exp.length - 1; i++) {
      if (exp[i] === "(") {
        depth++;
      } else if (exp[i] === ")") {
        depth--;
      } else if (depth === 0 && exp[i] === ",") {
        result.push(exp.slice(lastIndex + 1, i));
        lastIndex = i;
      }
    }
    result.push(exp.slice(lastIndex + 1, exp.length - 1));

    return result;
  };

  const solveExpression = (expression) => {
    const type = expression[0];
    switch (type) {
      case "t":
        return true;
      case "f":
        return false;
      case "!":
        const subExpression = expression.slice(2, expression.length - 1);
        return !solveExpression(subExpression);
      case "&":
        return parseExpToSubExp(expression)
          .map((exp) => solveExpression(exp))
          .reduce((prev, cur) => prev && cur, true);
      case "|":
        return parseExpToSubExp(expression)
          .map((exp) => solveExpression(exp))
          .reduce((prev, cur) => prev || cur, false);
    }
  };

  return solveExpression(expression);
};