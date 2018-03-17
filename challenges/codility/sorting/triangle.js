// Details: https://app.codility.com/programmers/lessons/6-sorting/triangle/

function solution(A) {
  const len = A.length;
  let i = 0;

  if (A === undefined || A.length < 2) return 0;

  A.sort((a, b) => b - a);

  while (i < len - 2) {
    const P = i, Q = i + 1, R = i + 2;
    if (isValidTriangleSides(A[P], A[Q], A[R])) return 1;
    i++;
  }
  return 0;
}

function isValidTriangleSides(firstVal, secondVal, thirdVal) {
  const f1 = firstVal + secondVal > thirdVal;
  const f2 = secondVal + thirdVal >  firstVal;
  const f3 = thirdVal + firstVal > secondVal;

  if (f1 && f2 && f3) return true;
}
