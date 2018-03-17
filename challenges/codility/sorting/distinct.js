// Details: https://app.codility.com/programmers/lessons/6-sorting/distinct/

function solution(A) {
  let counter = 0;

  A.sort((a, b) => a - b);

  for (let i = 0; i < A.length; i++) if (A[i] !== A[i + 1]) counter++;

  return counter;
}
