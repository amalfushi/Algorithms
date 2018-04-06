const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");


// Given a value, return the immediately larger node's value if it exists int he tree

link.BST.prototype.valAfter = function (val, node = this.root) {
    if (node) {
        let left_tree = this.valAfter(val, node.left);
        if (left_tree) return left_tree;
        if (node.value > val) return node.value;
        return this.valAfter(val, node.right)
    }
    return null
}


let tree = new link.BST();
// tree.add(5).add(3).add(8).add(2).add(4).add(1).add(10).add(9).add(6).add(11).add(7)
tree.root = a2bst.arrayToBST([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
console.log(tree.toString())
console.log(tree.valAfter(-Infinity));
console.log(tree.valAfter(5));
console.log(tree.valAfter(30));
