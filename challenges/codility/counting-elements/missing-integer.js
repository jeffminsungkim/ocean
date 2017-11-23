// Details: https://codility.com/programmers/lessons/4-counting_elements/missing_integer/

function solution(A) {

     var smallestInteger = 1;
     var arr = A.sort();
     var len = arr.length;
     var zeroOneBucket = Array.apply(null, Array(len + 1)).map(Number.prototype.valueOf, 0);

     for (var i = 0; i < len; i++) {
        var num = A[i];

        if (num > 0 && zeroOneBucket[num - 1] === 0) {
            zeroOneBucket[num - 1]++;
            smallestInteger = zeroOneBucket.indexOf(0) + 1;
        }
     }
     return smallestInteger;
}

A = [1, 3, 6, 4, 1, 2];
// A = [1, 2, 3];
// A = [-1, -3];
console.log(solution(A));