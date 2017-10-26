//Details: https://codility.com/programmers/lessons/4-counting_elements/frog_river_one/

// Given a non-empty zero-indexed array A consisting of N integers and integer X, returns the earliest time when the frog can jump to the other side of the river.
// If the frog is never able to jump to the other side of the river, the function should return −1.

function solution(X, A) {

    var leaves = Array.apply(null, Array(A.length)).map(Number.prototype.valueOf, 0);
    var totalSeconds = 0;
    var arithmeticSeq = X * (X + 1) / 2;

    for (var i = 0; i < A.length; i++) {
        var second = A[i];

        if (leaves[second - 1] === 0) {
            leaves[second - 1]++;
            totalSeconds += second;
        }

        if (totalSeconds == arithmeticSeq)
            return i;

    }
    return -1;
}

X = 5;
A = [1, 3, 1, 4, 2, 3, 5, 4];
console.log(solution(X, A));