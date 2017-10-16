/*
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