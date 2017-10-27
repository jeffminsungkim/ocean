var bst;

function run() {
    bst = new BinarySearchTree();
    bst.addValue(5);
    bst.addValue(3);
    bst.addValue(7);
    bst.addValue(9);
    // bst.addValue(20);
    //console.log(JSON.stringify(bst, null, 4));
}

function Node(val) {
    this.value = val;
    this.left = null;
    this.right = null;
}

function BinarySearchTree() {
    this.root = null;
}

Node.prototype.addNode = function(n) {


}

BinarySearchTree.prototype.addValue = function(val) {
    const node = new Node(val);
    if (this.root === null) {
        this.root = node;
    } else {
        this.root.addNode(node);
    }
};



run();