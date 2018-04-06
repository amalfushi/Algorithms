const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// given a Node return the pointer to the node immediately larger than the node if it exists
// tree = {2, 5, 8}
// nodeBefore(2) = node5
// nodeBefore(5) = node8


link.BTNode.prototype.nodeAfter = function () {
    return this.right ? this.right : this.parent.value > this.value ? this.parent : null;
}


let tree = new link.BST();
tree.root = a2bst.arrayToBST([2, 5, 8])
console.log(tree.toString())
console.log(tree.root.left.nodeAfter())
console.log(tree.root.nodeAfter());
console.log(tree.root.right.nodeAfter())
