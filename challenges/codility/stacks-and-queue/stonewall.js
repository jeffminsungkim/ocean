// Details: https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/

function solution(H) {

  let blocks = [];
  let numOfBlocks = 0;
  let height = 0;
  let i = 0;

  while (i < H.length) {
    if (H[i] > height) {
      let tempHeight = H[i] - height;
      blocks.push(tempHeight);
      height += tempHeight;
      numOfBlocks++;
      i++;
    } else if (H[i] < height) {
      height -= blocks.pop();
    } else {
      i++;
    }
  }
  return numOfBlocks;
}
