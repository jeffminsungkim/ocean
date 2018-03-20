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
      if (peacefulRiver.length === 0) {
        peacefulRiver.push(i);
        i++;
      }
    }
  }
  return peacefulRiver.length;
}

// const A = [4, 3, 2, 1, 5];
// const B = [0, 1, 0, 0, 0];

const A = [0, 1];
const B = [1, 1];

console.log("Left:", solution(A, B));
