// Details: https://codility.com/programmers/lessons/5-prefix_sums/passing_cars/

/*
Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.
*/

function solution(A) {

    var BILLION = 1000000000;
    var countEast = 0;
    var passingCars = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] === 1)
            passingCars += countEast;
        else
            countEast++;
    }

    if (BILLION < passingCars || 0 > passingCars)
        return -1;
    else
        return passingCars;

}

A = [0, 1, 0, 1, 1];
/*
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

A[0] = 0
A[1] = 1
A[2] = 0
A[3] = 1
A[4] = 1

Explanation: 
A[1] A[0] (1 pass)

A[3] A[0]
A[3] A[2] (2 passes)

A[4] A[0]
A[4] A[2] (2 passes)

Total: 5 passes.

*/

console.log(solution(A));