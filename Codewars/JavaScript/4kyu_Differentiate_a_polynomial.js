function differentiate(equation, point){
  let lastIndex = 0;
  const terms = [];
  for (let i = 1 ; i < equation.length ; i++) {
    if (equation[i] == '+' || equation[i] == '-') {
      terms.push(equation.substring(lastIndex, i))
      lastIndex = i;
    }
  }
  terms.push(equation.substring(lastIndex, equation.length));
  console.log(terms);

  let result = 0;
  for (let term of terms) {
    const sign = term[0] == '-' ? -1 : 1;
    term = term.replace(/[\-\+]/, "");
    term = term.split('^');

    const coefficient = term[0].length != 1 ? term[0].substring(0, term[0].length - 1) : 1;
    const exponent = term[1] !== undefined ? term[1] : term[0].includes('x') ? 1 : 0;
    console.log(sign + " " + coefficient + " " + exponent + " " + (point ** (exponent - 1)));
    console.log(sign * coefficient * exponent * (point ** (exponent - 1)));
    result += sign * coefficient * exponent * (point ** (exponent - 1));
  }

  return result;
}
let asd = "Asd";
asd.replace(/[]/, "");
asd.includes

console.log(differentiate("x^2-x", 3));