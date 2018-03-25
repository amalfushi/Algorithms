let link = require("./_BST.js");
const a2bst = require("./9 ArrayToBST.js");
// create a function that prints the BST's values traversed pre-order;

link.BST.prototype.bstPostOrder = function (callback = (node)=> console.log(node.value), node = this.root){
    if (node) {
        this.bstPostOrder(callback, node.right);
        callback(node)
        this.bstPostOrder(callback, node.left);
    }
}

let tree = new link.BST();
tree.add(33).add(19).add(20).add(90).add(18).add(75).add(66);
tree.bstPostOrder()
tree.bstPostOrder((node) => console.log(node.value*3))

let arr = []
tree.bstPostOrder((node) =>arr.push(node.value))
console.log(arr)