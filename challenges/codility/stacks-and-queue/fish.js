// Details: https://app.codility.com/programmers/lessons/7-stacks_and_queues/fish/

function solution(A, B) {
  const FLOWING_UPSTREAM = 0;
  const FLOWING_DOWNSTREAM = 1;
  const peacefulRiver = [];
  let i = 1;

  peacefulRiver.push(0);

  while (i < A.length) {
    let lastFish = peacefulRiver.pop();
    let lastFishSize = A[lastFish];
    let lastFishDirection = B[lastFish];

    if (B[i] === FLOWING_DOWNSTREAM || lastFishDirection === FLOWING_UPSTREAM) {
      peacefulRiver.push(lastFish);
      peacefulRiver.push(i);
      i++;
    }
    else if (B[i] === FLOWING_UPSTREAM && lastFishDirection === FLOWING_DOWNSTREAM) {
      if (A[i] < lastFishSize) {
        peacefulRiver.push(lastFish);
        i++;
      }
      if (A[i] === lastFishSize) {
        peacefulRiver.push(i);
        i++;
      }
      if (peacefulRiver.length === 0) {
        peacefulRiver.push(i);
        i++;
      }
    }
  }
  return peacefulRiver.length;
}

module.exports = solution;
