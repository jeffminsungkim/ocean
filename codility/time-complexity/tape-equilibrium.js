// Details: https://codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/

function solution(A) {

    // ES6
    // const total = A.reduce((sum, value) => sum + value, 0);

    const total = A.reduce(function (sum, value) {return sum + value;}, 0);
    var sumOfA = 0;
    var sumOfP = 0;
    var difference = 0;
    var minValue = 0;

    for (var p = 1; p < A.length; p++) {
        sumOfA += A[p-1];
        sumOfP = total - sumOfA;
        difference = Math.abs(sumOfP - sumOfA);

        if (p == 1)
            minValue = difference;
        if (minValue > difference)
            minValue = difference;
    }
    return minValue;
}

A = [3, 1, 2, 4, 3];
console.log(solution(A));