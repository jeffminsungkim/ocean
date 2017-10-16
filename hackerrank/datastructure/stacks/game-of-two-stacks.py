
"""
Sample Input 0
1
5 4 10
4 2 4 6 1
2 1 8 5

Sample Output 0
4

Explanation Detail: https://www.hackerrank.com/challenges/game-of-two-stacks/problem
"""

def is_exceed_limit(num):
    if num > limit:
        return True
    else:
        return False

def sum_list(stk, limit):
    if is_exceed_limit(stk[0]):
        return []
    for i in range(1, len(stk)):
        stk[i] = stk[i - 1] + stk[i]
        if is_exceed_limit(stk[i]):
            return stk[:i]
    return stk

def find_max_number(stack_a, stack_b, limit):
    """
    The two stacks initially look like this:
    stack_a: 4 2 4 6 1
    stack_b: 2 1 8 5

    Add each number in the stack until the sum of number exceeds the limit.
    If the number exceeds the limit, then remove the rest of numbers in the stack including the number on the current index.
    If sum of the last value from stack A and the value of stack B exceed the limit, then pop the value from the stack A.
    If the sum of the last value of stack A and the value in stack B exceed the limit, then pop the number from the stack A.
    """
    s_a = sum_list(stack_a, limit)  # [4, 6, 10]
    s_b = sum_list(stack_b, limit)  # [2, 3]
    max_num = len(s_a)  # max_num: 3
    i = 0
    while (i < len(s_b)):
        if len(s_a) and is_exceed_limit(s_a[-1] + s_b[i]):
            s_a.pop()
        else:
            max_num = max(max_num, len(s_a) + i + 1)
            i += 1
    return max_num

g = int(input().strip())
for _ in range(g):
    stack_a, stack_b, limit = input().strip().split(' ')
    stack_a, stack_b, limit = [int(stack_a), int(stack_b), int(limit)]
    stack_a = list(map(int, input().strip().split(' ')))
    stack_b = list(map(int, input().strip().split(' ')))

    print(find_max_number(stack_a, stack_b, limit))