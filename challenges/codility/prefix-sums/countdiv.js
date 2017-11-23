// Details: https://codility.com/programmers/lessons/5-prefix_sums/count_div/

function solution(A, B, K) {

    var result = 0;
    var min = Math.floor(((A + K) - 1) / K) * K;

    result = Math.floor(((B - min)) / K) + 1;

    return result;
}

A = 6;
B = 11;
K = 2;
console.log(solution(A, B, K));