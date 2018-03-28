const link = require("./_BST.js");

// clear all values from the tree;


// relies on garbage collection.
link.BST.prototype.removeAll = function () {
    this.root = null;
    return this;
}


let tree = new link.BST();
tree.add(5).add(3).add(8).add(2).add(4).add(1).add(10).add(9).add(6).add(11).add(7)
console.log(tree.removeAll().add("excelcior"));