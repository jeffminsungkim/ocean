// Details: https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/

function solution(S) {
  const shape = { ')': '(' };
  const stack = [];

  for (let parenthesis of S) {
    if (stack.length > 0 && shape[parenthesis] === stack[stack.length - 1]) stack.pop();
    else stack.push(parenthesis);
  }
  return stack.length === 0 ? 1 : 0;
}

module.exports = solution;
