//Details: https://codility.com/programmers/lessons/4-counting_elements/max_counters/
//Defficulty: MEDIUM

/*
You are given N counters, initially set to 0, and you have two possible operations on them:

increase(X) − counter X is increased by 1,
max counter − all counters are set to the maximum value of any counter.
A non-empty zero-indexed array A of M integers is given. This array represents consecutive operations:

if A[K] = X, such that 1 ≤ X ≤ N, then operation K is increase(X),
if A[K] = N + 1 then operation K is max counter.
*/

function solution(N, A) {

    var K;
    var X;
    var i;
    var tempMax = 0;
    var max = 0;
    var counters = Array.apply(null, Array(N)).map(Number.prototype.valueOf, 0);
 
    for (K = 0; K < A.length; K++) {
        X = A[K];
        if ((N + 1) > X) {
            i = X - 1;
            if (counters[i] < tempMax)
                counters[i] = tempMax;
            counters[i]++;
            if (max < counters[i])
                max = counters[i];
        }else {
            tempMax = max;
        }
    }
    for (var idx = 0; idx < N; idx++) {
        if (counters[idx] < tempMax)
            counters[idx] = tempMax;
    }
    return counters;
}

N = 5;
A = [3, 4, 4, 6, 1, 4, 4];
console.log(solution(N, A));