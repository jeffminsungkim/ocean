/*
Complete the preOrder function in your editor below, which has 1 parameter: a pointer to the root of a binary tree. It must print the values in the tree's preorder traversal as a single line of space-separated values.

Input Format

Our hidden tester code passes the root node of a binary tree to your preOrder function.

Constraints

1 <= Nodes in the tree <= 500 

Output Format

Print the tree's preorder traversal as a single line of space-separated values.

Sample Input

     1
      \
       2
        \
         5
        /  \
       3    6
        \
         4  
Sample Output

1 2 5 3 4 6 

Node is defined as

class Node {
    int data;
    Node left;
    Node right;
}

*/

Node node;

void preOrder(Node root){
    if (root == null)
        return;
    Node currentNode = root;
    while (currentNode != null){
        if (currentNode.left == null){
            System.out.print(currentNode.data + " ");
            currentNode = currentNode.right;
        }else{
            node = currentNode.left;
            while (node.right != null && node.right != currentNode)
                node = node.right;
            if (node.right == null){
                node.right = currentNode;
                System.out.print(currentNode.data + " ");
                currentNode = currentNode.left;
            }else{
                node.right = null;
                currentNode = currentNode.right;
            }
        }
    }
}