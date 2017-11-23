// Details: https://codility.com/programmers/lessons/2-arrays/cyclic_rotation/

function solution(A, K) {
    var givenArray = A;
    var timesOfRightShift = K;
    var newArray = [];
    var size = givenArray.length;

    for (var i = 0; i < size; i++) {
        newArray[(i + timesOfRightShift) % size] = givenArray[i];
    }

    return newArray;
}

A = [3, 8, 9, 7, 6];
K = 3;
console.log(solution(A, K));