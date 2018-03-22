const link = require("./_BST.js");
const height = require("./7 Height.js");

// Write isBalanced method to indicate whether a BsT is ballanced.  For this challenge, consider a tree balanced when all nodes are balanced. A BTNode is balanced if it's heights of it's left subtree and right subtree differ by at most one.


// return true if the value of the height of the left branch is less than 1 different 
link.BST.prototype.isBalanced = function (node = this.root) {
    // checks to see if the nodes are balanced (eg each node has one or less different subranch heights)
    return Math.abs(this.height(node.left) - this.height(node.right)) < 2;

    // checks to see if the tree is balanced and full as a whole (eg the shortest branch is only 1 away from the longest branch)
    return this.height() - this.shallowest() <= 1
}

// returns the shortest branch (needed for tree check);
link.BST.prototype.shallowest = function (node = this.root) {
    if (!node) return 0;
    return 1 + Math.min(this.shallowest(node.left), this.shallowest(node.right))
}


let tree = new link.BST();
tree.add(5)

console.log(tree.isBalanced()); // true
console.log(tree.add(-3).isBalanced()); //true (1 difference in the branches)
console.log(tree.add(25).isBalanced()); //true (0 differences);
console.log(tree.add(-1).add(4).isBalanced()); // false (2 differences)
console.log(tree.add(30).add(32).isBalanced()); // true on node check. false on tree check
