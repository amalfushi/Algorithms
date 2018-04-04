const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// Construct an isValid() method on the BST class to determin whether the three has valid structure.
// Ensure that all nodes and values are located in the appropriate left or right subtree.


link.BST.prototype.isValid = function (node = this.root, previous = null) {
    if (node) {
        if (!this.isValid(node.left, previous)) return false;
        if (previous && node.value <= previous.value) return false;
        previous = node;
        return this.isValid(node.right, previous);
    }
    return true;
}


let tree = new link.BST();
// tree.add(5).add(3).add(8).add(2).add(4).add(1).add(10).add(9).add(6).add(11).add(7)
tree.root = a2bst.arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(tree.toString(), tree.isValid());
tree.root.right.right.right = new link.BTNode(-Infinity);
console.log(tree.toString("inorder"), tree.isValid());