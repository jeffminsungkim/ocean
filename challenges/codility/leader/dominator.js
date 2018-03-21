// Details: https://app.codility.com/programmers/lessons/8-leader/dominator/

function solution(A) {
  const initialValue = {};
  const element = A.reduce(countElementOccurrence, initialValue);
  const totalNumberOfElement = Object.keys(element).length;

  if (A.length === 0) {
    return -1;
  }
  else if (A.length === 1) {
    return 0;
  }
  else {
    const dominator = findDominator(element);
    const elemOccurrence = element[dominator];

    if (elemOccurrence < totalNumberOfElement) return -1;

    for (let [i, element] of A.entries())
      if (element === dominator) return i;
  }
}

const countElementOccurrence = (accumulator, value) => {
  if (accumulator.hasOwnProperty(value)) accumulator[value] += 1;
  else accumulator[value] = 1;

  return accumulator;
};

const findDominator = element => Number(Object.keys(element).reduce((a, b) => element[a] > element[b] ? a : b ));

