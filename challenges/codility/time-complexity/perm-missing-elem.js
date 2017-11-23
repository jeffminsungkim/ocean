// Details: https://codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/

// Increase an index of new array based on the value in array A by 1.
// Simply, return an index of a new array that contains zero value.
function solution(A) {

    var newArray = Array.apply(null, Array(A.length + 1)).map(Number.prototype.valueOf, 0);

    for (var i = 0; i < A.length; i++) {
        newArray[A[i] - 1]++;
    }
    return newArray.indexOf(0) + 1;
}

A = [2, 3, 1 ,5];
console.log(solution(A));