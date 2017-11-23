// Details: https://codility.com/programmers/lessons/3-time_complexity/frog_jmp/

/*
For example, given:

  X = 10
  Y = 85
  D = 30
the function should return 3, because the frog will be positioned as follows:

after the first jump, at position 10 + 30 = 40
after the second jump, at position 10 + 30 + 30 = 70
after the third jump, at position 10 + 30 + 30 + 30 = 100
Assume that:

X, Y and D are integers within the range [1..1,000,000,000];
X ≤ Y.
Complexity:

expected worst-case time complexity is O(1);
expected worst-case space complexity is O(1).
*/

function solution(X, Y, D) {
    return Math.ceil((Y - X) / D);
}

X = 10;
Y = 85;
D = 30;
console.log(solution(X,Y,D));