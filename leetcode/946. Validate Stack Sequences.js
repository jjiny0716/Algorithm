/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  function findTargetWithPush(target, arr, startIdx, stack) {
    for (let i = startIdx; i < arr.length; i++) {
      stack.push(arr[i]);
      if (arr[i] === target) return i + 1;
    }
    return -1;
  }

  const stack = [];
  let curIdx = 0;
  for (let i = 0; i < popped.length; i++) {
    const target = popped[i];
    if (stack.length !== 0 && stack[stack.length - 1] === target) {
      stack.pop();
    } else {
      curIdx = findTargetWithPush(target, pushed, curIdx, stack);
      if (curIdx === -1) return false;
      stack.pop();
    }
  }
  return true;
};

const pushed = [1, 2, 3, 4, 5],
  popped = [4, 3, 5, 1, 2];
console.log(validateStackSequences(pushed, popped));

// others
// 2개의 단계로 나눈 것.

// var validateStackSequences = function (pushed, popped) {
//   const pushedTemp = [];
//   let iPushed = 0;
//   let iPopped = 0;
//   while (iPushed <= pushed.length - 1) {
//     if (pushedTemp.length === 0) {
//       pushedTemp.push(pushed[iPushed]);
//       ++iPushed;
//     } else if (pushedTemp[pushedTemp.length - 1] === popped[iPopped]) {
//       pushedTemp.pop();
//       ++iPopped;
//     } else {
//       pushedTemp.push(pushed[iPushed]);
//       ++iPushed;
//     }
//   }

//   while (pushedTemp.length > 0) {
//     const num = pushedTemp.pop();
//     if (num !== popped[iPopped]) {
//       return false;
//     }
//     ++iPopped;
//   }

//   return true;
// };


// 단순히 시뮬레이션 하기
// push후, pop할 수 있는지 검사를 반복

// const validateStackSequences = function(pushed, popped) {
//   const stack = []
//   let i = 0

//   for (const el of pushed) {
//       stack.push(el)
//       while (stack.length && stack[stack.length - 1] === popped[i]) {
//           stack.pop()
//           i++
//       }
//   }
  
//   return pushed.length === i
// }