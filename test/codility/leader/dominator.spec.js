const assert = require('chai').assert;
const expect = require('chai').expect;
const equileader = require("../../../challenges/codility/leader/dominator");
const solution = equileader.solution;
const findDominator = equileader.findDominator;

describe(`
  Dominator: Find an index of an array such that
  its value occurs at more than half of indices in the array`, () => {

  it('should return a dominator whose value is 3', () => {
    const element = { '3': 5, '4': 1, '-1': 1, '2': 1 };
    assert.equal(findDominator(element), 3);
  });

  it('should return index 0', () => {
    const A = [3, 4, 3, 2, 3, -1, 3, 3];
    assert.equal(solution(A), 0);
  });

  it(`should return -1 when the length is equal to 0`, () => {
    const A = [];
    assert.equal(solution(A), -1);
  });

  it(`should return -1 if array A does not have a dominator`, () => {
    const A = [0, 1, 2];
    assert.equal(solution(A), -1);
  });

  it(`should return -1 if it occurs in 3 out of 8 elements of A`, () => {
    const A = [0, 1, 2, 1, 1, 6, 4, 8];
    assert.equal(solution(A), -1);
  });

  it(`should return 0 when the length is equal to 1`, () => {
    const A = [1123342];
    assert.equal(solution(A), 0);
  });
});
