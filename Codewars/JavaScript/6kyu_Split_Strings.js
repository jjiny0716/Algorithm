function solution(str){
   result = [];
   for (let i = 0 ; i < str.length ; i += 2) {
     result.push(str.substring(i, i + 2));
   }
   if (str.length % 2 === 1) result[result.length - 1] += '_';
   return result;
}

console.log(solution("asdfd"));