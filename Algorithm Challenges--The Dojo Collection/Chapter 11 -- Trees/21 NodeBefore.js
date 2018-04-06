const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// given a Node return the pointer to the node immediately smaller than the node if it exists
// tree = {2, 5, 8}
// nodeBefore(5) = node2
// nodeBefore(8) = node5


link.BTNode.prototype.nodeBefore = function () {
    return this.left ? this.left : this.parent.value < this.value ? this.parent : null;
}


let tree = new link.BST();
tree.root = a2bst.arrayToBST([2, 5, 8])
console.log(tree.toString())
console.log(tree.root.left.nodeBefore())
console.log(tree.root.nodeBefore());
console.log(tree.root.right.nodeBefore())
