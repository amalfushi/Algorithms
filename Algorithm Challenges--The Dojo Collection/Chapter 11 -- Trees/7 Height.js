const link = require("./_BST.js");

// Build a height() method on the bst object that returns the total height of the tree - the longest sequence of nodes from root node to leaf node.

link.BST.prototype.height = function (node = this.root) {
    if (!node) return 0; // if the list is empty, return 0;
    else if (node.left && node.right) return Math.max(1 + this.height(node.left), 1 + this.height(node.right)); // if both node.left and node.right, return whichever one is recursive call on that node is larger
    else if (node.left) return 1 + this.height(node.left);
    else if (node.right) return 1 + this.height(node.right);
    else return 1; // at end of branch, return 1;
}


// ridiculous one liner version
link.BST.prototype.height = function (node = this.root) {
    return !node ? 0 : node.left && node.right ? Math.max(1 + this.height(node.left), 1 + this.height(node.left)) : node.left ? 1 + this.height(node.left) : node.right ? 1 + this.height(node.right) : 1;
}





let tree = new link.BST();
tree.add(5).add(8).add(4).add(10).add(9).add(-1).add(1).add(3)
console.log(tree.height(tree.root));