const assert = require('chai').assert;
const solution = require("../../../challenges/codility/stacks-and-queue/brackets");

describe("Brackets: Determine whether a given string of parentheses is properly nested", () => {
  const properlyNestedStr = "{([])}";
  const improperlyNestedStr = "{[)}";

  it(`should return 1 if a given string properly nested like ${properlyNestedStr}`, () => {
    assert.equal(solution(properlyNestedStr), 1);
  });

  it(`should return 0 if a given string improperly nested like ${improperlyNestedStr}`, () => {
    assert.equal(solution(improperlyNestedStr), 0);
  });
});
