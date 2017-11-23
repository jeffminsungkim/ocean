"""
You have an empty sequence, and you will be given N queries. Each query is one of these three types:

1 x  -Push the element x into the stack.
2    -Delete the element present at the top of the stack.
3    -Print the maximum element in the stack.
Input Format

The first line of input contains an integer, N. The next N lines each contain an above mentioned query. (It is guaranteed that each query is valid.)

Constraints
1 <= N <= 10^5
1 <= x <= 10^9
1 <= type <= 3

Output Format

For each type  query, print the maximum element in the stack on a new line.

Sample Input

10
1 97
2
1 20
2
1 26
1 20
2
3
1 91
3
Sample Output

26
91

"""

class Stack:

    def __init__(self):
        self.items = [0]

    def push(self, item):
        self.items.append(item)

    def pop(self):
        return self.items.pop()

    def peek(self):
        print(self.items[-1])

    def begin_with_type_check(self):
        for i in range(int(input())):
            num = list(map(int, input().split()))
            if num[0] == 1:
                self.push(max(num[1], self.items[-1]))
            elif num[0] == 2:
                self.pop()
            else:
                self.peek()

if __name__ == "__main__":
    s = Stack()
    s.begin_with_type_check()

