// Details: https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/

function findMaxProductOfThree(A) {
  let totalPositiveInteger = 0;
  let totalNegativeInteger = 0;
  let totalZero = 0;
  const len = A.length;

  A.sort((a, b) => Math.abs(b) - Math.abs(a));

  for (let num of A) {
    if (num > 0) totalPositiveInteger++;
    else if (num < 0) totalNegativeInteger++;
    else totalZero++;
  }

  if (totalPositiveInteger === 0) {
    return totalZero === 0 ? A[len - 3] * A[len - 2] * A[len - 1] : 0;
  } else {
    let counter = 0;
    let max = 1;

    for (let [i, num] of A.entries()) {
      if (totalNegativeInteger === 1) {
        if (num > 0) {
          max *= num;
          counter++;
        }
        if (counter === 3) return max;
      } else {
        if (i < 2) max *= num;
        if (i >= 2 && max < 0 && num < 0) return max *= num;
        if (i >= 2 && max > 0 && num > 0) return max *= num;
      }
    }
  }
}
