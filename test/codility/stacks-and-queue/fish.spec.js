const assert = require('chai').assert;
const solution = require("../../../challenges/codility/stacks-and-queue/fish");

describe("Fish: Calculate how many fish are alive", () => {
  it('should return 2 fish that will stay alive when both A and B arrays have the length of 5', () => {
    const A = [4, 3, 2, 1, 5];
    const B = [0, 1, 0, 0, 0];
    assert.equal(solution(A, B), 2);
    assert.lengthOf(A, 5, "Array A contains the sizes of the fish has length of 5");
    assert.lengthOf(B, 5, "Array B contains the directions of the fish has length of 5");
  });

  it('should return 2 fish that will stay alive when both A and B arrays have the length of 2', () => {
    const A = [0, 1];
    const B = [1, 1];
    assert.equal(solution(A, B), 2);
    assert.lengthOf(A, 2, "Array A contains the sizes of the fish has length of 2");
    assert.lengthOf(B, 2, "Array B contains the directions of the fish has length of 2");
  });

  it('should return 5 fish that will stay alive if fish moving in the same direction', () => {
    const A = [4, 3, 2, 1, 6];
    const B = [0, 0, 0, 0, 0];
    assert.equal(solution(A, B), 5);
  });

  it('should return 2 fish that will stay alive if they are the same size', () => {
    const A = [5, 2, 2, 2, 5];
    const B = [1, 0, 0, 0, 0];
    assert.equal(solution(A, B), 2);
  });

  it('should return 1 fish that will stay alive whose size is greater than others', () => {
    const A = [5, 4, 3, 2, 1];
    const B = [1, 0, 0, 0, 0];
    assert.equal(solution(A, B), 1);
  });
});
