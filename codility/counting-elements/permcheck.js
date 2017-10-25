// Details: https://codility.com/programmers/lessons/4-counting_elements/perm_check/

// If the value in array A is higher than the length of array A, which means there's a missing value in the array. Thus, return 0.
// If zeroOneBucket does not contain 0 or 1, (e.g. 2) then, it refers to the array A has duplicate values.
function solution(A) {

    var zeroOneBucket = Array.apply(null, Array(A.length)).map(Number.prototype.valueOf, 0);
    var result = 0;

    for (var i = 0; i < A.length; i++) {
        var num = A[i];

        if (num === 0 || num > A.length)
            return result;

        zeroOneBucket[num - 1]++;

        if (zeroOneBucket[num - 1] > 1)
            return result;
    }
    result = 1;
    return result;
}

A = [4, 1, 3, 2];
console.log(solution(A));