// Details: https://codility.com/programmers/lessons/5-prefix_sums/min_avg_two_slice/

function solution(A) {

    var minValue = 10001;
    var minIndex = 0;

    for (var i = 0; i < A.length; i++) {

        if ((A[i] + A[i + 1]) / 2.0 < minValue) {
            minIndex = i;
            minValue = (A[i] + A[i + 1]) / 2.0;
        }
        if ((A[i] + A[i + 1] + A[i + 2]) / 3.0 < minValue) {
            minIndex = i;
            minValue = (A[i] + A[i + 1] + A[i + 2]) / 3.0;
        }
    }

    return minIndex;
}

A = [4, 2, 2, 5, 1, 5, 8];
console.log(solution(A));