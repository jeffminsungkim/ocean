"""
The height of a binary tree is the number of edges between the tree's root and its furthest leaf. This means that a tree containing a single node has a height of 0.

Complete the getHeight function provided in your editor so that it returns the height of a binary tree. This function has a parameter, root, which is a pointer to the root node of a binary tree. 
Note -The Height of binary tree with single node is taken as zero.

Input Format

You do not need to read any input from stdin. Our grader will pass the root node of a binary tree to your getHeight function.

Output Format

Your function should return a single integer denoting the height of the binary tree.

Explanation Detail: https://www.hackerrank.com/challenges/tree-height-of-a-binary-tree/problem
"""

class Node:
    def __init__(self, info):
        self.info = info
        self.left = None
        self.right = None
        self.level = None

    def __str__(self):
        return str(self.info)

class BinarySearchTree:
    def __init__(self):
        self.root = None

    def create(self, val):
        if self.root is None:
            self.root = Node(val)
        else:
            current = self.root
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break
# ------------------------------------------------------------------------

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info):
          self.info = info
          self.left = None
          self.right = None


    // this is a node of the tree , which contains info as data, left , right
'''
def height(root):
    if root:
        return 1 + max(height(root.left), height(root.right))
    else:
        return -1
# ------------------------------------------------------------------------

"""
tree = BinarySearchTree()
t = int(input())

for _ in range(t):
    x = int(input())
    tree.create(x)

print(height(tree.root))
"""
