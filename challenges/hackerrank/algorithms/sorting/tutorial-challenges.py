"""
Sample Challenge
This is a simple challenge to get things started. Given a sorted array (ar) and a number (V), can you print the index location of V in the array?

The next section describes the input format. You can often skip it, if you are using included methods.

Input Format
There will be three lines of input:

 V - the value that has to be searched.
 n - the size of the array.
 ar - n numbers that make up the array.
Output Format
Output the index of V in the array.

The next section describes the constraints and ranges of the input. You should check this section to know the range of the input.

Detail: https://www.hackerrank.com/challenges/tutorial-intro
"""

v = int(input())
n = int(input())
arr = list(map(int, input().split()))
for i in range(n):
    if arr[i] == v:
        print(i)
# or
# print(arr.index(v))