// Details: https://codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/

function solution(A) {
    var oddArray = A;
    var m = new Map();
    var occurrence = 0;
    var unpairedValue = 0;
    for (var i = 0; i < oddArray.length; i++) {
        var oddKey = oddArray[i];
        if (m.has(oddKey)) {
            m.delete(oddKey);
        }else {
            m.set(oddKey, 1);
        }
    }
    for (var key of m.keys()) {
        unpairedValue = key;
    }
    return unpairedValue;
}

// Test Case 0, sample A array.
A = [9, 3, 9, 3, 9, 7, 9];
console.log(solution(A));