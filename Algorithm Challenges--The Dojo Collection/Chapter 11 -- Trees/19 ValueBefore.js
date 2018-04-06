const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// Given a value that may or may not be in the tree, return the value of the node immediately smaller than the value given.


link.BST.prototype.valBefore = function (val, node = this.root) {
    if (node) {
        let right_tree = this.valBefore(val, node.right);
        if (right_tree) return right_tree;
        if (node.value < val) return node.value;
        return this.valBefore(val, node.left)
    }
    return null
}


let tree = new link.BST();
// tree.add(5).add(3).add(8).add(2).add(4).add(1).add(10).add(9).add(6).add(11).add(7)
tree.root = a2bst.arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(tree.toString())
console.log(tree.valBefore(7));
console.log(tree.valBefore(30));
console.log(tree.valBefore(-1));
