const link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");

// Given a bst and two contained values, return the value of the closest common ancestor node. For each node, the chain up to the root (includeng self) represents that node's ancestry. Return the value of the node in both ancestor chains that is closest to both.

// tree does not need to be Binary for this method
link.BST.prototype.ClosestCommonAncestor = function (left, right, node = this.root) {
    if (!node) return null;
    if (node.value == left || node.value == right) return node; // if the current node is one of the values return it to the caller (below);

    // these will both be not null only when it is at the lowest common ancestor of the two values
    let lca_left = this.ClosestCommonAncestor(left, right, node.left); // search the left subtree for one or both of the values;
    let lca_right = this.ClosestCommonAncestor(left, right, node.right); // search the right subtree for one or both of the values;

    if (lca_left && lca_right) return node; // if both lca_left and lca_right are not null, return this current node;
    return lca_left ? lca_left : lca_right; // if one of them is not null, returrn that one
}


// requires binary tree
link.BST.prototype.BSTLCA = function (left, right, node = this.root) {
    while(node) { 
        if (node.value > left && node.value > right) node = node.left;
        else if (node.value < left && node.value < right) node = node.right;
        else break;
    }
    return node;
}

let tree = new link.BST();
tree.root = a2bst.arrayToBST([1, 5, 7, 10, 13, 15, 20]);
console.log(tree.ClosestCommonAncestor(5, 13));
console.log()
console.log(tree.ClosestCommonAncestor(1, 7));
console.log()
console.log(tree.ClosestCommonAncestor(13, 20));
console.log("\n*********\n")
console.log(tree.BSTLCA(5, 13));
console.log()
console.log(tree.BSTLCA(1, 7));
console.log()
console.log(tree.BSTLCA(13, 20));