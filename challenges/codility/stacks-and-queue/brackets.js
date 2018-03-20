// Details: https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/

function solution(S) {
  const pattern = { "}": "{", ")": "(", "]": "[" };
  let stack = [];

  for (let bracket of S) {
    if (stack.length > 0 && pattern[bracket] === stack[stack.length - 1]) stack.pop();
    else stack.push(bracket);
  }
  return stack.length === 0 ? 1 : 0;
}
